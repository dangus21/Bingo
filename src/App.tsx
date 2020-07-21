import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { BingoTemplate, BingoCardEditOptions } from "declarations/BingoCard";

import BingoCard from "Components/BingoCard";
import BingoWrapper from "Components/BingoWrapper";
import { Button, Container, CssBaseline } from '@material-ui/core';

const App = () => {
    const [counter, setCounter] = useState<number>(0)

    const bingoPreset: BingoTemplate = {
        text: '',
        placeholder: 'Edit Me',
        id: counter.toString(),
        isEditing: false,
        uuid: uuidv4(),
    }

    const [bingos, setBingos] = useState<BingoTemplate[]>([
        bingoPreset,
        bingoPreset,
        bingoPreset,
        bingoPreset,
        bingoPreset,
        bingoPreset,
        bingoPreset,
        bingoPreset,
    ])


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
        <Container component="section">
            <CssBaseline />
            <Button variant="contained" color="primary" onClick={addAndIncrement}>Add Bingo Card</Button>
            <BingoWrapper>
                {bingos.map(bingo =>
                    <BingoCard
                        key={bingo.id.toString()}
                        setEdit={setEdit}
                        setText={setText}
                        {...bingo} />
                )}
            </BingoWrapper>
        </Container>
    );
}

export default App;
