// Это универсальный файл

export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {                 // Получаем items вместо users
        if(u[objPropName] === itemId) {     // Заюзаем нотацию (обращение к свойсту (Property)) ч-з кв. скобки - идентификатор, который мы берём у объекта - u[objPropName]. Искатся объекты будут по itemId
            return { ...u, ...newObjProps } // Заменим часть нов. объекта (свойство) и делаем его деструктуризацию ...newObjProps. В нём может быть одно св-во (following: true), а может быть много.
        }
        return u;
    });
}

/* users: state.users.map(u => {
 *   if(u.id === action.id){
 *      return {...u, followed: false}
 *   }
 *  return u;
 * })
*/ 