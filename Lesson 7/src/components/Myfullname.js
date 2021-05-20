function Myfullname(props) {
  return (
    <h1 className="name_style">
      {props.firstName}
      {props.lastName}
    </h1>
  );
}

export default Myfullname;
