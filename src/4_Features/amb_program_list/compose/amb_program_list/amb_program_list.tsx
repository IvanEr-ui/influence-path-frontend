
import './amb_program_list.css'

import { IAmbProgram } from '../../model/types/index'
import { useEffect, useState } from 'react';
import { AmbProgramCard } from '@features/amb_program_list/ui/amb_card/amb_card';
import { UiButton } from '@shared/ui/form/button/Button';

const ambProgramsItems: IAmbProgram[] = [
    {
        id: 1,
        iconUrl: "path/to/manta-icon.png",
        nameProject: "Manta Network",
        nameAmbProgram: "MantaFest Ambassador Program",
        status: true,
        category: [
            { id: 1, name: "Web3" }
        ],
        countUserJoin: {
            count: 1690,
            date: "2023-07-27"
        }
    },
    {
        id: 2,
        iconUrl: "path/to/sui-icon.png",
        nameProject: "Sui",
        nameAmbProgram: "Sui Ambassador Program",
        status: true,
        category: [
            { id: 2, name: "Web3" }
        ],
        countUserJoin: {
            count: 1490,
            date: "2023-07-27"
        }
    },
    {
        id: 3,
        iconUrl: "path/to/mega-icon.png",
        nameProject: "Мега маркет",
        nameAmbProgram: "Мега Ambassador Program",
        status: true,
        category: [
            { id: 3, name: "Web2" }
        ],
        countUserJoin: {
            count: 1200,
            date: "2023-07-27"
        }
    },
    {
        id: 4,
        iconUrl: "path/to/caldera-icon.png",
        nameProject: "Caldera",
        nameAmbProgram: "Caldera Ambassador Program",
        status: false,
        category: [
            { id: 4, name: "Web3" }
        ],
        countUserJoin: {
            count: 1190,
            date: "2023-07-27"
        }
    },
    {
        id: 5,
        iconUrl: "path/to/zkSync-icon.png",
        nameProject: "ZkSync",
        nameAmbProgram: "ZkSync Ambassador Program",
        status: true,
        category: [
            { id: 5, name: "Web3" }
        ],
        countUserJoin: {
            count: 1382,
            date: "2023-07-27"
        }
    },
    {
        id: 6,
        iconUrl: "path/to/layerZero-icon.png",
        nameProject: "LayerZero",
        nameAmbProgram: "LayerZero Ambassador Program",
        status: true,
        category: [
            { id: 6, name: "Web3" }
        ],
        countUserJoin: {
            count: 650,
            date: "2023-07-27"
        }
    },
    {
        id: 7,
        iconUrl: "path/to/entropy-icon.png",
        nameProject: "Entropy",
        nameAmbProgram: "Entropy Ambassador Program",
        status: true,
        category: [
            { id: 7, name: "Web3" }
        ],
        countUserJoin: {
            count: 920,
            date: "2023-07-27"
        }
    },
    {
        id: 8,
        iconUrl: "path/to/premium-icon.png",
        nameProject: "Косметика премиум",
        nameAmbProgram: "Косметика Ambassador Program",
        status: false,
        category: [
            { id: 8, name: "Web2" }
        ],
        countUserJoin: {
            count: 850,
            date: "2023-07-27"
        }
    },
    {
        id: 9,
        iconUrl: "path/to/chebur-icon.png",
        nameProject: "Чебурекс ест!",
        nameAmbProgram: "Чебурекс Ambassador Program",
        status: true,
        category: [
            { id: 9, name: "Web2" }
        ],
        countUserJoin: {
            count: 290,
            date: "2023-07-27"
        }
    }
];


export const AmbProgramList = () => {
    const [ambPrograms, setAmbProgram] = useState<IAmbProgram[]>([])

    useEffect(() => {
        setTimeout(() => {
            setAmbProgram([...ambProgramsItems])
        }, 500)
    }, [])


    return (
        <>
            {ambPrograms && ambPrograms.map((item) => (
                <AmbProgramCard key={item.id} {...item} />
            ))}
        </>
    );
}
