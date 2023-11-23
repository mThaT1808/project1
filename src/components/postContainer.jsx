import '../styles/App.css'
import MyButton from './UI/button/MyButton';


const postContainer = function (props) {

    return (
        <div className='post'>

            <div>
                <strong className='post_head'>
                    {props.post.title}
                </strong>
                <div >
                    {props.post.body}
                </div>
            </div>
  
            <div className='post_buttons'>
                <MyButton onClick ={() => props.remove(props.post)} style={{marginBottom: '5px', marginRight: '5px'}}>Удалить РЫБА</MyButton>

            </div>
        </div>
    );

};

export default postContainer;
