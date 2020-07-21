export interface BingoTemplate {
    text: string,
    id: string,
    placeholder: string,
    isEditing: boolean,
    uuid: string;
}

export interface BingoCardEditOptions {
    id?: string,
    closeAll?: boolean,
}