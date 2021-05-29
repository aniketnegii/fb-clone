import React from 'react';
import Story from './Story';
import './StoryReel.css';
import faker from 'faker';

function StoryReel() {
    return (
        <div className="storyReel" >
            <Story image={faker.image.image()} profileSrc={faker.image.avatar()} title={faker.name.findName()} />
            <Story image={faker.image.image()} profileSrc={faker.image.avatar()} title={faker.name.findName()} />
            <Story image={faker.image.image()} profileSrc={faker.image.avatar()} title={faker.name.findName()} />
            <Story image={faker.image.image()} profileSrc={faker.image.avatar()} title={faker.name.findName()} />
            <Story image={faker.image.image()} profileSrc={faker.image.avatar()} title={faker.name.findName()} />
        </div>
    )
}

export default StoryReel
