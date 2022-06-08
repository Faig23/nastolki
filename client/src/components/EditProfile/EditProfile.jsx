import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAnotherUserFromServer } from "../../redux/actions/anotherUserAction";
import { editUser, signUp } from "../../redux/actions/userAction";


function EditProfile() {
  const { id } = useParams();
  console.log(id)

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })

  useEffect(() => {
    dispatch(getAnotherUserFromServer(id))
  }, [])

  const user = useSelector(state => state.user);
  const anotheruser = useSelector(state => state.anotheruser);

  const [userEdit, setUserEdit] = useState(user ? user : {});
  const [file, setFile] = useState(null) // avatar
  const navigate = useNavigate();

  const changeHandler = (e) => {
    // console.log(userEdit);
    setUserEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(userEdit);
  };
  const avatarHandler = (e) => {
    setFile(e.target.files[0])
  }



  const submitHandler = (e) => {
    e.preventDefault();
    if (file) dispatch(editUser({ ...userEdit, file }, navigate));
    else dispatch(editUser({ ...userEdit }, navigate));
  };
  // const handleInputs = useCallback((e) => {
  //   if (e.target.type === 'file') {
  //     setUserEdit((prev) => ({
  //       ...prev,
  //       photo.
  //       [e.target.name]: e.target.value,
  //       file: e.target.files[0],
  //     }));
  //   } else {
  //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   }
  // }, []);
  // console.log(anotheruser.id)
  // console.log(user.id)
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
    {anotheruser?.id == user.id ?
    <form onSubmit={submitHandler}>
    <div className="aaa">

<div className="flexy">
  <div className="avanar">
    <div className="boxForImg img2">
      <img className="img img2" src={`http://localhost:3001${user.photo}`} alt=""/>
    </div>
  <input onChange={avatarHandler}  type="file" className="form-control upload" name="file"/>
  </div>
  <div className="info">
    <div>
     <input onChange={changeHandler} className = "form-control input" type="text" placeholder="Имя" name="userName" value={userEdit.userName}/>
    </div>
    <div>
    <label >Пол:</label>
    <input onChange={changeHandler} type="radio" id="contactChoice1" name="gender" value='мужской' />
    <label htmlFor="contactChoice1">Мужской</label>

    <input onChange={changeHandler} type="radio" id="contactChoice2" name="gender" value="женский"/>
    <label htmlFor="contactChoice2">Женский</label>
    </div>
    <div>

     <input onChange={changeHandler} className = "form-control input line" type="text" placeholder="Город" name="city" value={userEdit.city}/>
     <input onChange={changeHandler} className = "form-control input line" type="number" placeholder="Возраст" name="dateborn" value={userEdit.dateborn}/>

    </div>
  
    <div className="div3">
      <textarea onChange={changeHandler} className = "form-control input area" type="text" placeholder="Обо мне" name="info" value={userEdit.info}/>
    </div>
     <button className="btn btn-primary button"  type="submit">Сохранить</button>
  </div>
</div>
    </div>
      </form>
      :
=======
=======

//     {anotheruser?.id == user.id ?
//     <form onSubmit={submitHandler}>
//     <div className="aaa">

// <div className="flexy">
//   <div className="avanar">
//     <div className="boxForImg img2">
//       <img className="img img2" src={`http://localhost:3001${user.photo}`} alt=""/>
//     </div>
//   <input onChange={avatarHandler}  type="file" className="form-control upload" name="file"/>
//   </div>
//   <div className="info">
//     <div>
//      <input onChange={changeHandler} className = "form-control input" type="text" placeholder="Имя" name="userName" value={userEdit.userName}/>
//     </div>
//     <div>
//     <label >Пол:</label>
//     <input onChange={changeHandler} type="radio" id="contactChoice1" name="gender" value='мужской' />
//     <label htmlFor="contactChoice1">Мужской</label>

//     <input onChange={changeHandler} type="radio" id="contactChoice2" name="gender" value="женский"/>
//     <label htmlFor="contactChoice2">Женский</label>
//     </div>
//     <div>

//      <input onChange={changeHandler} className = "form-control input line" type="text" placeholder="Город" name="city" value={userEdit.city}/>
//      <input onChange={changeHandler} className = "form-control input line" type="number" placeholder="Возраст" name="dateborn" value={userEdit.dateborn}/>

//     </div>
  
//     <div className="div3">
//       <textarea onChange={changeHandler} className = "form-control input area" type="text" placeholder="Обо мне" name="info" value={userEdit.info}/>
//     </div>
//      <button className="btn btn-primary button"  type="submit">Сохранить</button>
//   </div>
// </div>
//     </div>
//       </form>
//       :

>>>>>>> 32bd366aee5a3e0b71c72ea8f2feaa8d2a89e4b5
    {isLoading ? <div className="aaa aaa2">
      
    </div>:
<div>
      {anotheruser?.id == user.id ?
        <form onSubmit={submitHandler}>
          <div className="aaa">

            <div className="flexy">
              <div className="avanar">
                <div className="box">
                  <img className="img img2" src={`http://localhost:3001${user.photo}`} alt="" />
                </div>
                <input onChange={avatarHandler} type="file" className="form-control upload" name="file" />
              </div>
              <div className="info">
                <div>
                  <input onChange={changeHandler} className="form-control input" type="text" placeholder="Имя" name="userName" value={userEdit.userName} />
                </div>
                {userEdit?.gender === "Мужской" ? (
                  <div>
                    <label >Пол:</label>
                    <input onChange={changeHandler} type="radio" id="contactChoice1" name="gender" value="Мужской" checked />

                    <label htmlFor="contactChoice1">Мужской</label>

                    <input onChange={changeHandler} type="radio" id="contactChoice2" name="gender" value="Женский" />
                    <label htmlFor="contactChoice2">Женский</label>
                  </div>
                ) : userEdit?.gender === "Женский" ? (
                  <div>
                    <label >Пол:</label>
                    <input onChange={changeHandler} type="radio" id="contactChoice1" name="gender" value="Мужской" />

                    <label htmlFor="contactChoice1">Мужской</label>

                    <input onChange={changeHandler} type="radio" id="contactChoice2" name="gender" value="Женский" checked />
                    <label htmlFor="contactChoice2">Женский</label>
                  </div>
                ) : (
                  <div>
                    <label >Пол:</label>
                    <input onChange={changeHandler} type="radio" id="contactChoice1" name="gender" value="Мужской" />

                    <label htmlFor="contactChoice1">Мужской</label>

                    <input onChange={changeHandler} type="radio" id="contactChoice2" name="gender" value="Женский" />
                    <label htmlFor="contactChoice2">Женский</label>
                  </div>
                )

                }
                <div>

                  <input onChange={changeHandler} className="form-control input line" type="text" placeholder="Город" name="city" value={userEdit.city} />
                  <input onChange={changeHandler} className="form-control input line" type="number" placeholder="Возраст" name="dateborn" value={userEdit.dateborn} />

                </div>

                <div className="div3">
                  <textarea onChange={changeHandler} className="form-control input area" type="text" placeholder="Обо мне" name="info" value={userEdit.info} />
                </div>
                <button className="btn btn-primary button" type="submit">Сохранить</button>
              </div>
            </div>
          </div>
        </form>
        :
<<<<<<< HEAD
>>>>>>> 07e184149880096b9ecea755774791c2790aa5fd
=======

>>>>>>> 32bd366aee5a3e0b71c72ea8f2feaa8d2a89e4b5
        (<div className="aaa bbb">

          <div className="flexy">
            <div className="avanar">
              <div className="box">
                <img className="img2" src={`http://localhost:3001${anotheruser?.photo}`} alt="" />
              </div>
            </div>
            <div className="info">
              <div>
                <label >Имя: <span className="span3">{anotheruser?.userName}</span></label>
              </div>
              <div>
                {anotheruser?.city ? <label >Город: <span className="span3">{anotheruser?.city}</span></label> : <label >Город: не указан</label>}
              </div>
              <div>
                {anotheruser?.gender !== 'null' ? <label >Пол: <span className="span3">{anotheruser?.gender}</span></label> : <label >Пол: не указан</label>}
              </div>
              <div>
                {anotheruser?.dateborn ? <label >Возраст: <span className="span3">{anotheruser?.dateborn}</span></label> : <label >Возраст: не указан</label>}
              </div>
              <div>
                {anotheruser?.info ? <label >Обо мне: <div><span className="span3">{anotheruser?.info}</span></div></label> : <label >Обо мне: нет информации</label>}
              </div>
            </div>
          </div>
        </div>)
      }
      </div>
    }

    </>
  )
}
export default EditProfile
