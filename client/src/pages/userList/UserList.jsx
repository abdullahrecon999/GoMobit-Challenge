import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {useState, useEffect, useRef} from 'react';
import Select from 'react-select'

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  });

  return isMounted;
}

const getData = async () => {
    
  return await fetch("/users/GetUsers", {method:'GET'})
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result
    }).catch(error => console.log('error', error));
}

export default function UserList() {
  const [data, setData] = useState();
  const [Copydata, setCopyData] = useState();
  const [Emaildata, setEmailData] = useState(null);

  const isMountedRef = useIsMounted();

  useEffect(() => {
    // load data from db
    async function get(){
      let resp = await getData()
      if (isMountedRef.current){
        setData(resp)
        getEmails()
        setCopyData(resp)
      }
    }
    get()
    
  }, [isMountedRef])

  useEffect(()=>{
    getEmails()
  },[data])

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "name",
      width: 190,
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "cellno",
      headerName: "cell_no",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created_At",
      width: 200,
    },
    {
      field: "is Deleted",
      headerName: "is Deleted",
      width: 140,
    },
  ];

  const getEmails = () => {
    if(data != undefined){
      let opdata=[{value:'all', label:'All'}]
      data.map((val, id) => {
        opdata.push({value:val.email, label:val.name})
      })
      console.log(opdata)
      setEmailData(opdata)
    }
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const filterData = () => {
    console.log(selectedOption)
    
    if (selectedOption.value == 'all'){
      setData(Copydata)
    }
    else {
      setData(Copydata.filter((obj) => obj.email == selectedOption.value))
    }
    console.log(data)
  }

  return (
    <div className="userList">
      <h3>Search User</h3>

      {(Emaildata != null)? (<Select
        name="Users"
        isClearable="true"
        isSearchable="true"
        placeholder="Users"
        defaultValue={{ label: "All", value: "All" }}
        onChange={setSelectedOption}
        options={Emaildata}
      />) : (<p>Loading</p>)}
      
      <button onClick={()=>{filterData()}}>Search</button>

      {(data != undefined)? ((data[0] != undefined)? (
        <DataGrid
        rows={data}
        getRowId ={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      ) : (<p>{console.log('waiting')}</p>)):(<p>{console.log('waitkjs')}</p>)}
      
    </div>
  );
}
