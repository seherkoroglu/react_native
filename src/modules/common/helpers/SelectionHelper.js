export const selectionItemsHelper = (id, setSelectionItems, selectionItems, maxListLength) => {
    if (maxListLength === 1) {
      /*
       * if there is only one item for selection just take it and remove others
       * */
      setSelectionItems(id);
    } else {
      if (selectionItems?.includes(id) === true) {
        setSelectionItems(selectionItems => {
          return selectionItems?.filter(itemId => itemId !== id);
        });
      } else if (selectionItems?.length < maxListLength && maxListLength !== 1) {
        setSelectionItems(oldArray => [...oldArray, id]);
      }
    }
  };
  