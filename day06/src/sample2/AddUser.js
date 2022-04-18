import React from 'react';

const AddUser = () => {
    return (
        <form>
            <h2>스물다섯 스물하나 추가 </h2>
            <p>
                <label>이름</label>
                <input type="text" />
            </p>
            <p>
                <label>주소</label>
                <input type="text" />
            </p>
            <p>
                <button>추가</button>
            </p>
        </form>
    );
};

export default AddUser;