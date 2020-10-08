import React, { useState } from "react";
import "./Bingo.css";
import { v4 as uuid } from 'uuid';
import { BingoTemplate, BingoCardEditParams } from "interfaces/BingoCard";

import BingoCard from "Components/BingoCard";
import BingoWrapper from "Components/BingoWrapper";

import { ToastContainer, toast } from 'react-toastify';
import { Container, Grid } from "semantic-ui-react";
import { MUTButton } from "my-ui-toolkit";

import 'react-toastify/dist/ReactToastify.css';

export const Bingo = () => {
    const [counter, setCounter] = useState<number>(0)
    const notify = (text: string) => toast(text);

    const bingoPreset: BingoTemplate = {
        text: '',
        placeholder: 'Edit Me',
        id: counter.toString(),
        isEditing: false,
        isChecked: false,
        allowEditing: true,
        uuid: uuid(),
    }

    const debugBingos = Array(8)
        .fill({})
        .map(b => ({ ...bingoPreset, ...b, uuid: uuid() }))
        .map((c, i) => ({ ...c, id: i.toString() }))

    const [bingos, setBingos] = useState<BingoTemplate[]>(process.env.NODE_ENV === "development" ? debugBingos : [])


    const addAndIncrement = (): void => {
        setBingos([...bingos, bingoPreset]);
        setCounter(counter + 1);
    }

    const removeBingo = (uuid: string): void => setBingos(bingos.filter(bingo => bingo.uuid !== uuid))

    const setEdit = (bingoId: string, params: BingoCardEditParams = {}): void => {
        setBingos(
            bingos.map(bingo =>
                bingo.id === bingoId ?
                    {
                        ...bingo,
                        ...params,
                    } : bingo
            )
        )
    }
    
    console.log(MUTButton);

    return (
        <Container as="main" fluid style={{ padding: "15px 0" }}>
            <ToastContainer autoClose={2500} hideProgressBar closeOnClick />
            <Grid stackable centered columns="2" style={{ margin: 0 }}>
                <Grid.Column width="2" style={{ maxWidth: "20vw", marginTop: 12.25 }}>
                    <MUTButton border pointer onClick={addAndIncrement}>Add Bingo Card</MUTButton>
                </Grid.Column>
                <Grid.Column width="14" style={{ maxWidth: "80vw" }}>
                    <BingoWrapper>
                        {bingos.map(bingo =>
                            <BingoCard
                                key={bingo.id.toString()}
                                setEdit={setEdit}
                                setNotification={notify}
                                remove={removeBingo}
                                {...bingo} />
                        )}
                    </BingoWrapper>
                </Grid.Column>
            </Grid>
        </Container>
    )
}
