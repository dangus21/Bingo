export interface BingoTemplate {
    text: string,
    id: string,
    placeholder: string,
    allowEditing: boolean,
    isEditing: boolean,
    isChecked: boolean,
    uuid: string;
}

export interface BingoCardEditParams {
    text?: string,
    isEditing?: boolean,
    isChecked?: boolean,
    allowEditing?: boolean,
}