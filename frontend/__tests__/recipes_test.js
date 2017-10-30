import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import RecipesList from '../src/javascripts/components/homePage/recipesList/recipesList';
import SingleRecipe from '../src/javascripts/components/homePage/recipesList/recipe';

const items = [{createdAt: new Date(2017,10,2), description:"mmmm", directions:"yummy", ingredients:"yunmmy", photo:"beef-ragu-88066-1-1509090682343.jpeg", previousVersion:[], title:"Beef Ragu", _id: "59f2e587eaa9e416903e2e45"},
  {createdAt: new Date(2016,10,2), description:"Chicken", directions:"Lorum Ipsum", ingredients:"Lorum Ipsum", photo:"detail-1509355229104.png", previousVersion:[], title:"Chicken Ragu", _id: "59f6ef03eaa9e416903e2e46"}];

it('should match its snapshot with recipe items', () => {
  const list = toJson(mount(<RecipesList recipes={items} />));

  expect(list).toMatchSnapshot();
});

it('single recipe should change onMouseEnter/onMouseLeave', () => {
    const component = mount(<SingleRecipe recipe={items[0]} key={items[0]._id}/>);
    component.find('a').simulate('mouseEnter', { target: {
      value: 'mouseEnter function' }
    });
    component.find('a').simulate('mouseLeave', { target: {
      value: 'mouseLeave function' }
    });
    expect(toJson(component)).toMatchSnapshot();
});

