import React from 'react'
import HistoryModal from './HistoryModal'
import { Card, Button } from '@material-ui/core'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Payment() {
  return (
    <div className="payment">
        <Card className="payment__topHeader">
          <h1 >Your Payments</h1>
          <div className="flex-grow"></div>
          <HistoryModal/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <SearchInput/>
        </Card>
      <div className="payment__dataRow row">
        <div className="col col-sm-3 col-md-3 col-lg-3">
          <div className="blueBox">
            <div className="heading">
              Total Earning
            </div>
            <div className="body">
              <p>$16,756.00</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-3 col-md-3 col-lg-3">
          <div className="blueBox">
            <div className="heading">
              Earning this month
            </div>
            <div className="body">
              <p>$20,00.00</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-4 col-md-4 col-lg-4">
          <div className="blueBox">
            <div className="heading" style={{justifyContent:"space-between"}}>
              Due Balance
              <Button size="small" variant="contained">Set Remainder</Button>
            </div>
            <div className="body">
              <p>$786.00</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-2 col-md-2 col-lg-2">
          <div className="blueBox">
            <div className="heading">
              <SettingsIcon/> &nbsp;Settings
            </div>
            <div className="body">
            <Button size="small" variant="contained">Update bank details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SearchInput = ()=>{
  return(
    <Input
    id="search-input"
    variant="outlined"
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    }
    endAdornment={
      <InputAdornment position="start">
        <FilterListIcon />
      </InputAdornment>
    }
  />
  )
}
