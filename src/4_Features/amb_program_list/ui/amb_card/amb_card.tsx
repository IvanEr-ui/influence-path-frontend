import { IAmbProgram } from '../../model/types/index'
import './amb_card.css'

import { UserJoinAmbProgram } from '@shared/assets/icons/svg';

export const AmbProgramCard = ({ id, iconUrl, nameProject, nameAmbProgram, status, countUserJoin }: IAmbProgram) => {
    return (
        <div className="amb-card-program ">
            <div className="content">
                <div className="icon_status">
                    <img className="icon" src={iconUrl} alt="icon" />
                    <div className="status">
                        <p className="status-text">Статус</p>
                        <p className={`status-indicator ${status ? 'green' : 'red'}`}></p>
                    </div>
                </div>
                <div className='amb-program-info'>
                    <div>
                        <p className="project-name">{nameProject}</p>
                        <p className="amb-program-name">{nameAmbProgram}</p>
                    </div>
                    <div className='amb-program-statistics'>
                        <img src={UserJoinAmbProgram} alt='user-join-program' />
                        <p className='percent-statistics'>136.5<span style={{ color: "rgb(252, 104, 250, 0.8)" }}>%</span></p>
                        <p className='numerical-statistics'><span style={{ color: "rgb(252, 104, 250, 0.8)" }}>+</span>1690</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
