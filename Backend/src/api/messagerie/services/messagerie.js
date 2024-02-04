'use strict';

/**
 * messagerie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::messagerie.messagerie');
