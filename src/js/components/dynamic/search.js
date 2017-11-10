import React from 'react'
import {Link} from 'react-router'

export default class SearchToper extends React.Component {
    keylogin(e) {
        if (e.keyCode == '13') {
            this.props.searchparam(e)
        }
    }

    cleartext() {
        this.refs.inputtext.value = ''
    }

    render() {
        const SearchTop = {
            all: {
                backgroundColor: '#fff',
                marginBottom: '10px',
                boxShadow: '0 2px 10px #ccc',
                padding: '12px 0px 12px 8px',
                display: 'flex'
            },
            cancle: {
                width: '40px',
                textAlign: 'center',
                marginTop: '6px',
                color: 'rgba(0, 0, 0, 0.65)'
            }
        }
        return (
            <div style={SearchTop.all}>
                <div class="search_top">
                    <span class="icon-sousuo"></span>
                    <input type="text" ref="inputtext" onKeyDown={this.keylogin.bind(this)}/>
                    <span class="icon-guanbi" onClick={this.cleartext.bind(this)}></span>
                </div>
                <Link to={`/`} style={SearchTop.cancle}>
                    <span style={{color: '#777'}}>取消</span>
                </Link>

            </div>
        )
    };
}
