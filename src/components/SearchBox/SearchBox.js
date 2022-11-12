import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CartContext from '../../store/cartContext';
import { Data } from '../Menu/FoodData/FoodData';
const SearchBox = ({ showSearch, handleClose }) => {
    const { searchFood, setSearchFood, searchFoodItem, foodData, setFoodData } = useContext(CartContext)
    const location = useLocation()
    let currLocation
    const handleSearch = (e) => {
        setSearchFood(e.target.value)
    }
    useEffect(() => {
        setFoodData(Data)

    }, [])
    return (
        <Dialog fullWidth='md' open={showSearch} onClose={handleClose}>
            <DialogTitle >Search</DialogTitle>
            <DialogContent>

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Enter food name"
                    type="search"
                    fullWidth={true}
                    variant="standard"
                    value={searchFood}
                    onChange={handleSearch}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}>Cancel</Button>
                <Button onClick={() => {
                    currLocation = location.pathname
                    searchFoodItem(currLocation)
                }
                }>Search</Button>
            </DialogActions>
        </Dialog>
    )
}

export default SearchBox