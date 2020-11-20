import Application from 'colorado-fourteeners/app';
import config from 'colorado-fourteeners/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
