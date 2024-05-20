import maroon from "../assets/Maroon.png"
import lab from "../assets/lab.png"
import chi from "../assets/CHI.png"

export class Constants{
  public static TITLE:string="Welcome to Brock Bena's Website"
  public static PERSONAL_IMGS:{src:string,alt:string}[]=[
    {
      src:maroon,
      alt:"MarronPark"
    },{
      src:lab,
      alt:"InTheLab"
    },{
      src:chi,
      alt:"NavyPier"
    }
  ]
  public static PERSONAL_SECTIONS:{header:string,body:string}[]=[
    
  ]
  public static PORTFOLIO_IMGS:{src:string,alt:string}[]=[
    {
      src:maroon,
      alt:"MarronPark"
    },{
      src:lab,
      alt:"InTheLab"
    }
  ]
  public static PURPOSE_LIST:string[]=[
    'Reenforce my knowledge of React frameworks.',
    'Try out Tailwind as a css library with custom React components.',
    'Implementing a light/dark mode to a webpage. See the upper right corner icon to change modes.',
    'Show the ability to build a dynamically scaled website that is easy to add and remove elements from the site.',
    'Worked on implementing a dedicated custom "Page Not Found", so the user knows they are accessing the right website, but the page their looking for doesn\'t exist'
  ]
}