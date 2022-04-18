import './Test6.css'
import myStyle from './Test6.module.css'
// import myStyle from './Test6.module.scss'

const Test6 = () => {
    return (
        <div className="wrap">
            <div className="box"></div>
            <div className="box"></div>
            <div className={ myStyle.box }></div>
            <div className={ myStyle.box }></div>            

            {/* 다중클래스 */}
            <div className="size bg"></div>
            <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.bg}`}></div>
            <div className={`${myStyle.size} bg`}></div>

            {/* 다중클래스 */}
            <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
            <div className={['size', myStyle.bg].join(' ')}></div>
            <div className={[myStyle.size, 'bg'].join(' ')}></div>

            {/* module.css안에서 일반 css처럼 사용하는경우  */}
            <div className="mybox"></div>
        </div>
    );
};

export default Test6;