import React, { Component } from "react";
import Loading from "../../components/Loading";

interface PlayerProps {
  name: string;
  minutes: number;
  seconds: number;
  avatar: string;
  trophies: number;
  isOpponent: boolean;
}

interface PlayerState {
  minutes: number;
  seconds: number;
}

class Player extends Component<PlayerProps, PlayerState> {
  private countdownInterval: NodeJS.Timeout | null = null;

  constructor(props: PlayerProps) {
    super(props);
    // Initialize state
    this.state = {
      minutes: this.props.minutes,
      seconds: this.props.seconds,
    };
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      this.setState((prevState) => {
        let { minutes, seconds } = prevState;
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.countdownInterval!);
            return { minutes: 0, seconds: 0 };
          }
          minutes -= 1;
          seconds = 59;
        } else {
          seconds -= 1;
        }
        return { minutes, seconds };
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  render(): React.ReactNode {
    const { name, avatar, trophies , isOpponent } = this.props;
    const { minutes, seconds } = this.state;

    return (
      <div className="m-4 ">
        <div className={`flex gap-3 ${isOpponent ? 'flex-row-reverse' : ''}`}>
          <div className="avatar">
            <div className="mask mask-squircle w-16">
              <img src={avatar} alt="Player Avatar" />
            </div>
          </div>
          <div className="text-lg flex font-bold text-white justify-center items-center">
            {name}
          </div>
        </div>

        <div className={`m-2 text-white flex ${isOpponent ? 'justify-end':''}`}>
          <div className="countdown font-mono text-2xl">
            <span style={{ "--value": minutes } as React.CSSProperties}></span>:
            <span style={{ "--value": seconds } as React.CSSProperties}></span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Player;
