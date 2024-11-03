import { filterInterface } from "@/Interface/filterInterface";

export const setFilterChange = 
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> , setFilter:React.Dispatch<React.SetStateAction<filterInterface>>) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
        ...prevFilter,
        [name]: value,
    }));
};