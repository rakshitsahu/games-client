import React from 'react';
import { ZIndex } from '../tic-tac-toe/components/util';

interface LoadingState{
    visible: boolean
}
interface LoadingProps{
    visible: boolean
}
class Loading extends React.Component{
    constructor(props : LoadingProps){
        super(props);
        this.state = {
            visible : false
        }
    }

    render(): React.ReactNode {
        return (
            <div 
                id='loading-container' 
                className={`absolute top-0 left-0 h-full w-full bg-black flex justify-center items-center z-[${ZIndex.Loading}] `}
            >
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
}

export default Loading;
