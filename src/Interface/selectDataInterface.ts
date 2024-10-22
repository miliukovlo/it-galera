export interface selectDataInterface {
    options: optionsInterface[],
    id: number,
    selectName: string
}

export interface optionsInterface {
    text: string,
    value: string
}

export interface valueMapInterface {
    campus: string;
    group_name: string;
    role: string;
    department: string;
  }