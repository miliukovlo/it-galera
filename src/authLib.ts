'use server'

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const oneDaySeconds = 86400 * 1000

export const login = async (loginValue: string, role: "teacher" | "admin") : Promise<boolean> => {
    try {
        const expires = new Date(Date.now() + oneDaySeconds);
        const session = await encrypt({ loginValue, expires });
        cookies().set("session", session, { expires, httpOnly: true });
        cookies().set("role", role,{ expires, httpOnly: true });
        return true;
    } catch (e) {
        console.error(e)
        throw new Error()
    }
}

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("86400 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function logout() {
  cookies().delete('session')
  cookies().delete("role")
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function getRole() {
  const role = cookies().get("role")?.value;
  if (!role) return null;
  return role;
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + oneDaySeconds);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}