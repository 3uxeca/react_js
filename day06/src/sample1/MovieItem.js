import Numeral from "numeral";
import { AiOutlineArrowDown, AiOutlineArrowUp , AiOutlineEllipsis} from "react-icons/ai";


const MovieItem = ({ item , onOver }) => {
    const { rank, movieNm ,salesAmt,audiCnt, rankInten} = item 
    return (
        <tr onMouseOver={ () => onOver(rank) }>
           <td>{rank}</td> 
           <td>{movieNm}</td> 
           <td>{Numeral(salesAmt).format(0,0)} 원</td>            
           <td>{Numeral(audiCnt).format(0,0)} 명</td> 
           <td>
               <i style={{ fontSize:20, color:'red'}}> {
                   rankInten > 0 &&  <AiOutlineArrowUp/>
               } </i>
               <i style={{ fontSize:20, color:'blue'}}>
                   { rankInten < 0 &&  <AiOutlineArrowDown/> }
               </i>
               <i style={{ fontSize:20, color:'#999'}}>{ 
                   rankInten ===0 && <AiOutlineEllipsis/>
               } </i>
               <span style={{marginLeft:10}}> {rankInten}  </span>
               </td> 
        </tr>
    );
};

export default MovieItem;