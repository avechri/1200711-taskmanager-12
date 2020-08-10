import {render} from "../main";
import {siteMainElement} from "./site-menu";

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

const createBordTemplate = () => {
  return (
    `    <section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>

        <div class="board__tasks"></div>
       </section>`
  );
};

render(siteMainElement, createBordTemplate(), `beforeend`);

export {createBordTemplate, boardElement, taskListElement};
