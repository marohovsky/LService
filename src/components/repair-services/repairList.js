import podSvg from '../../assets/repair-services-logo/pod.svg'
import toSvg from '../../assets/repair-services-logo/to.svg'
import diagnosticSvg from '../../assets/repair-services-logo/diagnostic.svg'
import engineSvg from '../../assets/repair-services-logo/engine.svg'
import breaksSvg from '../../assets/repair-services-logo/breaks.svg'
import akpSvg from '../../assets/repair-services-logo/akp.svg'
import termoSvg from '../../assets/repair-services-logo/termo.svg'
import electricSvg from '../../assets/repair-services-logo/electric.svg'
import gasSvg from '../../assets/repair-services-logo/gas.svg'
import grmSvg from '../../assets/repair-services-logo/grm.svg'
import steeringSvg from '../../assets/repair-services-logo/steering.svg'





const repairList = [
  {img: podSvg, name: "Ремонт подвески" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: toSvg, name: "Плановое ТО" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: engineSvg, name: "Ремонт двигателя" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: breaksSvg, name: "Тормозная система" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: akpSvg, name: "Ремонт МКПП/АКПП'" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: electricSvg, name: "Ремонт электро-оборудования'" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: termoSvg, name: "Система охлаждения" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: gasSvg, name: "Топливная система" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: grmSvg, name: "Замена ГРМ" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: diagnosticSvg, name: "Диагностика" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
  {img: steeringSvg, name: "Ремонт рулевой" , repairList: [
    {name:'Замена ШРУСа', min: 600} ,
    {name:'Замена амортизатора', min: 500} ,
    {name:'Замена втулок, стоек стабилизатора', min: 300} , 
    {name:'Замена рычагов подвески', min: 500} , 
    {name:'Замена сайлентблоков', min: 400} , 
    {name:'Замена ступицы,ступичного подшипника', min: 600} , 
    {name:'Замена шаровой опоры', min: 300} , 
  ]},
];
export default repairList