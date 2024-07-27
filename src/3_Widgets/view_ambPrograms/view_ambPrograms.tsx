import { UiButton } from '@shared/ui/form/button/Button'
import './view_ambPrograms.css'
import { AmbProgramList } from '@features/amb_program_list'


export const ViewAmbPrograms = () => {
    return (
        <div className="section-view">
            <h1>Амбассадорские программы</h1>
            <div className='amb-programs-list'>
                <AmbProgramList />
            </div>
            <UiButton
                variant='primary'
                className='view-amb-button'
            >
                <p>
                    Посмотреть все
                    амбассадорские <br />программы
                </p>
            </UiButton>
        </div>

    )
}