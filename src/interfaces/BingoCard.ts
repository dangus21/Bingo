export interface BingoTemplate {
    text: string,
    id: string,
    placeholder: string,
    isEditing: boolean,
    uuid: string;
}

export interface BingoCardEditParams {
    text?: string,
    isEditing?: boolean,
    isChecked?: boolean,
}