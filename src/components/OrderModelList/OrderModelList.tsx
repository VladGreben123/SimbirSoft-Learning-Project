import styles from './OrderModelList.module.css'
import ModelData from './OrderModelListData';
import type { Model } from "../../types/index";
import { useCallback, useState } from 'react'

const filterList = [
    {name: "Все модели"},
    {name: "Эконом"},
    {name: "Премиум"}
]

type Props = {
    onModelSelect: (model: Model) => void;
    activeModel: Model | null;
}

function OrderModelList( {onModelSelect, activeModel} : Props) {
    const [filter, setFilter] = useState('Все модели');

    const ModelFilter = useCallback((model : Model) => {
        let style : string = styles.model
        model.class != filter && filter != "Все модели" ? style += ' '+styles.hiden : ''
        model.id === activeModel?.id ? style += ' '+styles.activeModel : ''
        return style
    },[filter,activeModel])

    const handleModelSelect = useCallback((model : Model) => {
        return(() => (onModelSelect(model)))
    },[])

    const handleFilterSelect = useCallback((filter : string) => {
        return(()=>{setFilter(filter)})
    },[])

    return(
        <div className={styles.modelContainer}>
          <div className={styles.modelFilter}>
            <form className={styles.modelFilterForm}>
              {filterList.map((item) => (
                <div key = {item.name} className={styles.modelFilterItem}>
                    <input
                      id = {item.name}
                      type="radio"
                      name = "modelFilter"
                      checked={filter === item.name}
                      onChange={handleFilterSelect(item.name)}
                    />
                    <label htmlFor={item.name}>{item.name}</label>
                </div>
              ))}
            </form>
          </div>
          <div className={styles.modelListContainer}>
              {ModelData.map((model) => (
                <div 
                  className={ModelFilter(model)} 
                  onClick={handleModelSelect(model)}
                >
                  <h2 className={styles.modelName}>{model.name}</h2>
                  <p className={styles.modelPrice}>{`${model.minPrice} - ${model.maxPrice} ₽`}</p>
                  <img src = {model.image} className={styles.modelImage}/>
                </div>
              ))}
          </div>
        </div>
    )
}

export default OrderModelList