// color from matpltlib's tab20
export const tab_color : {[key : string]: string} = {
    'blue'        : '#2C6FEF',
    'lightblue'   : '#aec7e8',
    'orange'      : '#FA8C23',
    'lightorange' : '#ffbb78',
    'green'       : '#269D7D',
    'lightgreen'  : '#98df8a',
    'red'         : '#d62728',
    'lightred'    : '#ff9896',
    'purple'      : '#9D62FF',
    'lightpurple' : '#c5b0d5',
    'brown'       : '#8c564b',
    'lightbrown'  : '#c49c94',
    'pink'        : '#e377c2',
    'lightpink'   : '#f7b6d2',
    'grey'        : '#8E8E8E',
    'lightgrey'   : '#c7c7c7',
    'gray'        : '#7f7f7f',
    'lightgray'   : '#c7c7c7',
    'olive'       : '#bcbd22',
    'lightolive'  : '#dbdb8d',
    'cyan'        : '#17becf',
    'lightcyan'   : '#9edae5',
}

export function get_color(colorname : string, palette : {[key : string]: string}) : string {
    return palette[colorname] ?? colorname;
}
