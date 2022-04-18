import PropTypes from 'prop-types';

// rest는 객체 배열 함수를 파마미터를 사용한다 
// ...rest를 사용하여 우리가 지정한 props를 제외한 값들을 rest라는 객체에 모아준다 
// js 나머지 연산자 

const Test1Sub = ({ id, label , text , handleChange , ...rest }) => {
    return (
        <div>
            <label htmlFor={id}> {label } </label>
            <input type="text" id ={id} value={text} onChange={ handleChange }
                { ...rest }
            />
        </div>
    );
};

Test1Sub.propTypes = {
    id: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired 
  };

export default Test1Sub;