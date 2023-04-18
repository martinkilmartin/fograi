import React from "react";
import {
    Grid,
    Loading,
} from '@nextui-org/react'
import { Headline } from "../../types/Headline";

import { HeadlineCard } from '@components/Card'

interface HeadlineListProps {
    headlines: Headline[];
}

export const HeadlineList: React.FC<HeadlineListProps> = ({ headlines }) => {
    if (headlines.length === 0) {
        return (

            <Grid.Container gap={2} justify="center">
                <Grid>
                    <Loading type="spinner" size="lg" />
                </Grid>
            </Grid.Container>
        )
    }
    else {
        return <ul>
            {headlines.map((headline) => (
                <li key={headline.id}>
                    <HeadlineCard headline={headline} key={headline.id} country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'nz' | 'oz' | 'uk' | 'us'} />
                </li>
            ))}
        </ul>
    }
};