import React from "react";
import {
    Badge,
    Button,
    Grid,
    Loading,
} from '@nextui-org/react';
import { HeadlineCard } from '@components/Card';
import { Headline } from "../../types/Headline";


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
</Grid.Container>);

const LoadingGrid = () => {
    const cells = new Array(6).fill(0);
    return (
        <div className="loading-grid">
            {cells.map((cell, index) => (
                <div key={index} className="loading-cell">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                </div>
            ))}
            <style jsx>{`
          .loading-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
            gap: 1em;
          }
          .loading-cell {
            width: 100%;
            height: 200px;
            padding: 1em;
            background-color: #f3f3f3;
            display: flex;
            flex-direction: column;
            gap: 0.5em;
          }
          .loading-text {
            width: 100%;
            height: 1em;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          @keyframes loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}</style>
        </div>
    );
};

export const HeadlineList: React.FC<HeadlineListProps> = ({ headlines, loading, fetching, error }) => {

    const backToTop = () => {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
    if (loading) {
        return <LoadingGrid />
    }
    else if (error) {
        return <div>Error: {error.message} </div>
    }
    else if (!loading && !error && !headlines?.length) {
        return <div>No headlines!</div>
    }
    else {
        return <><Grid.Container gap={2} justify="center" style={{ padding: '0' }}>
            {headlines?.map((headline, idx) => (
                <Grid xs={12} md={6} lg={4} xl={3} key={headline.id}>
                    <HeadlineCard headline={headline} country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'nz' | 'oz' | 'uk' | 'us'} idx={idx + 1} total={headlines.length} />
                </Grid>
            ))}
        </Grid.Container>
            {fetching && <LoadingSpinner />}
            <Badge aria-label="The number of headlines loaded" variant="bordered" css={{ position: 'fixed', bottom: '20px', left: '10px' }}>{fetching ? <Loading type="gradient" size="xs"/> : headlines?.length}</Badge>
            <Button
                aria-label="Back to top"
                auto
                ghost
                onClick={() => backToTop()}
                css={{ position: 'fixed', bottom: '20px', right: '10px' }}
                icon={'⬆️'}
            >
            </Button>
        </>
    }
};