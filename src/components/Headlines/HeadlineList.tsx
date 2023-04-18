import React from "react";
import { Headline } from "../../types/Headline";

import { HeadlineCard } from '@components/Card'

interface HeadlineListProps {
    headlines: Headline[];
}

export const HeadlineList: React.FC<HeadlineListProps> = ({ headlines }) => {
    return (
        <ul>
            {headlines.map((headline) => (
                <li key={headline.id}>
                    <HeadlineCard headline={headline} key={headline.id} country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'nz' | 'oz' | 'uk' | 'us'} />
                </li>
            ))}
        </ul>
    );
};