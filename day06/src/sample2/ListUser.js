import React from 'react';
import ItemUser from './ItemUser';

const ListUser = ({users , onDel}) => {

    return (
        <div>
            <h2 className="users">스물다섯 스물하나 출연진 </h2>
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                </colgroup>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => <ItemUser key={user.id} user={user} onDel={onDel} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListUser;