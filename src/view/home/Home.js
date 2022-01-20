import { AppBar, Avatar, Container, CssBaseline, Grid, IconButton, InputLabel, MenuItem, Select, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import CustomeSearchHome from "./customeSearchHome";
import { dataSelectLokasi } from "./dataSelectLokasi";
import AppBarHome from "./HeaderHome";
import { imageSlideFood } from "./imageSlideFood";
import SliderCatHome from "./SliderCatHome";
import SliderHome from "./SliderHome";


class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            lokasi: "",
            tabVal: 0,
            disableSelect: true
        }
    }

    handleChangeLokasiTab = (event, newValue) => {
        console.log('valuee: ', newValue)
        this.setState({
            tabVal: newValue
        },() => {
            if(this.state.tabVal === 1){
                this.setState({
                    disableSelect: false,
                    lokasi: ""
                })
            }else{
                this.setState({
                    disableSelect: true,
                    lokasi: ""
                })
            }
        })
    }

    handleChangeLokasi = (event) => {
        const {
            target: { value },
          } = event;
        console.log('handleChangeLokasi: ', value)

        this.setState({
            lokasi: value
        })

    }


    pilihLokasi(){
        return(
            <Grid container spacing={2} flexGrow={1}>

                <Grid xs={4} item>
                    <InputLabel 
                        htmlFor="lokasi"
                        style={{
                        fontSize: '11px',
                        fontWeight: '500',
                        color: 'rgb(165 165 165)'
                        }}
                        >
                        Pilih Lokasi
                    </InputLabel>
                    <Box height="5px" />
                    <Select
                    style={{
                        backgroundColor: '#f6f6f6',
                        width: '140px',
                        paddingLeft: '5px'
                    }}
                        disabled={this.state.disableSelect}
                        name="lokasi"
                        displayEmpty
                        value={this.state.lokasi}
                        onChange={this.handleChangeLokasi}
                        placeholder="Semua"
                        variant="standard"
                        disableUnderline
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={""}>Semua</MenuItem>
                            {dataSelectLokasi.map((val) => (
                                <MenuItem key={val.id} value={val.value}>{val.value}</MenuItem>
                            ))}
                        
                    </Select>
                </Grid>
                <Grid item xs={8}>
                    <Tabs indicatorColor={""} value={this.state.tabVal} onChange={this.handleChangeLokasiTab}
                    className="tabsLokasi" style={{
                        justifyContent: 'end'
                    }}>
                        <Tab value={0} label="Terdekat"  />
                        <Tab value={1} label="Menurut Lokasi" />
                    </Tabs>
                </Grid>
                

            </Grid>
            
        )
    }

    render(){

        return(
            <React.Fragment>
                <AppBarHome />
                <Toolbar />
                <div style={{
                    backgroundColor: 'rgba(185, 191, 199, 0.24)',
                    padding: '10px',
                    height: '485px',
                    width: '100%'
                }}>
                    <SliderHome />

                    <CustomeSearchHome />
                    <Box height="20px" />
                    <SliderCatHome />
                    <Box height="20px" />
                    {this.pilihLokasi()}
                </div>
            </React.Fragment>
        )
    }

}

export default Home;