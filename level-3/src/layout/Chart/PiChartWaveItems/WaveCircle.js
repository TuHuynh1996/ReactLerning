import Wave from 'react-wavify'
import { useEffect, useState } from 'react'

const WaveCircle = (props) => {
    const [waveHeight, setWaveHeight] = useState(0);
    const [amplitude, setAmplitude] = useState(12);
    useEffect(() => {
        if (props.ratio !== 0) {
            if (props.ratio === 100) {
                setWaveHeight(0)
                setAmplitude(0)
            } else {
                const circleHeight = document.getElementsByClassName('wave-circle')[0].clientHeight;
                setWaveHeight(((100 - props.ratio) * circleHeight) / 100)
            }
        } else {
            setWaveHeight(300);
        }

    })
    return (
        <div className='wave-circle'>
            <div className='wave-content'>
                <Wave style={{ height: '100%' }} fill={props.color ? props.color : 'blue'}
                    paused={false}
                    options={{
                        height: waveHeight,
                        amplitude: amplitude,
                        speed: 0.25,
                        points: 3
                    }}
                />
            </div>
            <div className='wave-content'>
                <Wave style={{ height: '101%' }} fill='url(#gradient)'
                    paused={false}
                    options={{
                        height: waveHeight,
                        amplitude: amplitude / 2,
                        speed: 0.45,
                        points: 4
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="20%" stopColor={props.color ? props.color : 'blue'} />
                            <stop offset="100%" stopColor="#000000" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
        </div>
    )
}
export default WaveCircle