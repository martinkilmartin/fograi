import React from "react";
import {
    Grid,
    Loading,
} from '@nextui-org/react'
import { Headline } from "../../types/Headline";

import { HeadlineCard } from '@components/Card'

interface HeadlineListProps {
    headlines: Headline[] | undefined;
    loading: boolean;
    fetching: boolean;
    error: Error | null;
}

const LoadingSpinner: React.FC = () => (<Grid.Container gap={2} justify="center">
    <Grid>
        <Loading type="spinner" size="lg" />
    </Grid>
</Grid.Container>)

export const HeadlineList: React.FC<HeadlineListProps> = ({ headlines, loading, fetching, error }) => {
    if (loading) {
        return <LoadingSpinner />
    }
    else if (error) {
        return <div>Error: {error.message} </div>
    }
    else if (!loading && !error && !headlines?.length) {
        return <div>No headlines!</div>
    }
    else {
        return <><ul>
            {headlines?.map((headline) => (
                <li key={headline.id}>
                    <HeadlineCard headline={headline} key={headline.id} country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'nz' | 'oz' | 'uk' | 'us'} />
                </li>
            ))}
        </ul>
            {fetching && <LoadingSpinner />}
        </>
    }
};