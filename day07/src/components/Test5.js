import './Test5.css'
import myStyle from './Test5.module.css'
// import 참조변수 from './파일명.module.css'

const Test5 = () => {
    return (
        <div>
            <div className="box">Test</div>            
            <div className={ myStyle.box }>Test</div>
        </div>
    );
};

export default Test5;

/*
    파일명.css => 컴포넌트단위로 재사용, 주로 class명으로 작성한다 
    1. 전체 스타일로 작성 - css폴더 - main.css 모두 스타일 작성 ( 나쁜방법 )
    2. 컴포넌트별로 css(scss)별도로 작성 예) Todos
    3. 컴포넌트별로 css(scss)별도로 작성 - module.css/module.scss ( 클래스 이름의 중첩제거 )


    module.css/module.scss
    - 클래스명의 중첩제거 
    - 기존프로젝트의 css 클래스명과 중복되어도 스타일이 꼬이지 않게 유지보수 
    
    파일명.module.css(scss)
    import 참조변수 from './파일명.module.css'

    className = { 참조변수.클래스명 } 
    className = { 참조변수.box }
    이름확인  => 파일명_클래스명__아무말
*/