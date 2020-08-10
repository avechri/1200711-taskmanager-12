import {boardElement} from "./board";
import {render} from "../main";

const createLoadMoreButtonTemplate = () => {
  return (
    `
<button class="load-more" type="button">load more</button>
    `
  );
};

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

export {createLoadMoreButtonTemplate};
