import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { BingoTemplate, BingoCardEditOptions } from "declarations/BingoCard";

import BingoCard from "Components/BingoCard";
import BingoWrapper from "Components/BingoWrapper";
import Notification from "Components/Notification";

import { Button, Container } from "semantic-ui-react";

const App = () => {
    const [counter, setCounter] = useState<number>(0)
    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false)
    const [notificationText, setNotificationText] = useState<string>('')

    const bingoPreset: BingoTemplate = {
        text: '',
        placeholder: 'Edit Me',
        id: counter.toString(),
        isEditing: false,
        uuid: uuidv4(),
    }

    const debugBingos = Array(8).fill({}).map((b, i) => ({ ...bingoPreset, ...b, id: i, uuid: uuidv4() }))

    const [bingos, setBingos] = useState<BingoTemplate[]>(debugBingos)


    const addAndIncrement = (): void => {
        setBingos([...bingos, bingoPreset]);
        setCounter(counter + 1);
    }

    const setEdit = ({ id, closeAll }: BingoCardEditOptions): void => {
        if (closeAll) {
            setBingos(
                bingos.map(bingo =>
                    bingo.id === id ?
                        {
                            ...bingo,
                            isEditing: false
                        } : bingo
                )
            )
        } else {
            setBingos(
                bingos.map(bingo =>
                    bingo.id === id ?
                        {
                            ...bingo,
                            isEditing: !bingo.isEditing
                        } : bingo
                )
            )
        }
    }

    const setText = (id: string, text: string): void => {
        setBingos(
            bingos.map(bingo =>
                bingo.id === id ?
                    {
                        ...bingo,
                        text,
                    } : bingo
            )
        )
    }

    return (
        <Container>
            <Notification
                text={notificationText}
                isOpen={isNotificationOpen}
                setOpenNotification={setIsNotificationOpen} />
            <Button onClick={addAndIncrement}>Add Bingo Card</Button>
            <BingoWrapper>
                {bingos.map(bingo =>
                    <BingoCard
                        key={bingo.id.toString()}
                        setEdit={setEdit}
                        setText={setText}
                        setOpenNotification={setIsNotificationOpen}
                        setNotificationText={setNotificationText}
                        {...bingo} />
                )}
            </BingoWrapper>
        </Container>
    );
}

export default App;
