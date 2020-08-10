import {createSiteMenuTemplate} from "./view/site-menu";
import {createSiteFiltersTemplate} from "./view/filters";
import {createBordTemplate} from "./view/board";
import {createTaskTemplate} from "./view/task";
import {createTaskEditTemplate} from "./view/task-edit";
import {createLoadMoreButtonTemplate} from "./view/load-more-button";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export {render};
