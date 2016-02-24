'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chord = chord;
exports.scale = scale;
exports.dotted = dotted;

var _trias = require('./trias');

/**
 * Generates a chord.
 *
 * @param {number} root        Root note
 * @param {array} quality      Chord quality
 * @param {array} inversion    Chord inversion
 *
 * @returns {array}    Chord
 */
function chord(root, quality, inversion) {
  if (typeof inversion === 'undefined') {
    inversion = _trias.ROOT_POSITION;
  }

  var chord = [];

  quality.forEach(function (value, index) {
    newChord.push(value + root + inversion[index]);
  });

  return chord;
};

/**
 * Generates a scale.
 *
 * @param {number} root    Root note
 * @param {array} scale    Scale type
 *
 * @returns {array}    Scale
 */
function scale(root, scale) {
  var newScale = [root];

  scale.forEach(function (value, index) {
    if (index === 0) {
      newSacale.push(value + root);
    } else {
      newScale.push(newScale[index - 1] + value + root);
    }
  });

  return newScale;
};

/**
 * Increases the relative duration of the specified note by adding modifier
 * dots.
 *
 * @param {number} note    Relative duration of the note.
 * @param {number} dots    Number of dots to add to the note.
 *
 * @returns {number}
 */
function dotted(note, dots) {
  return note + (Math.pow(2, dots) - 1) / Math.pow(2, dots);
};
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _triads = require('./triads');

var Triads = _interopRequireWildcard(_triads);

var _intervals = require('./intervals');

var Intervals = _interopRequireWildcard(_intervals);

var _scales = require('./scales');

var Scales = _interopRequireWildcard(_scales);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MusicTheory = {
	Triads: Triads,
	Intervals: Intervals,
	Scales: Scales,
	Rythm: Rythm
};

exports.default = MusicTheory;
module.exports = exports['default'];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PERFECT_UNISON = exports.PERFECT_UNISON = 0;
var MINOR_SECOND = exports.MINOR_SECOND = 1;
var MAJOR_SECOND = exports.MAJOR_SECOND = 2;
var MINOR_THIRD = exports.MINOR_THIRD = 3;
var MAJOR_THIRD = exports.MAJOR_THIRD = 4;
var PERFECT_FOURTH = exports.PERFECT_FOURTH = 5;
var TRITONE = exports.TRITONE = 6;
var PERFECT_FIFTH = exports.PERFECT_FIFTH = 7;
var MINOR_SIXTH = exports.MINOR_SIXTH = 8;
var MAJOR_SIXTH = exports.MAJOR_SIXTH = 9;
var MINOR_SEVENTH = exports.MINOR_SEVENTH = 10;
var MAJOR_SEVENTH = exports.MAJOR_SEVENTH = 11;
var PERFECT_OCTAVE = exports.PERFECT_OCTAVE = 12;

/* Augmented or diminished intervals */
var DIMINISHED_SECOND = exports.DIMINISHED_SECOND = 0;
var AUGMENTED_UNISON = exports.AUGMENTED_UNISON = 1;
var DIMINISHED_THIRD = exports.DIMINISHED_THIRD = 2;
var AUGMENTED_SECOND = exports.AUGMENTED_SECOND = 3;
var DIMINISHED_FOURTH = exports.DIMINISHED_FOURTH = 4;
var AUGMENTED_THIRD = exports.AUGMENTED_THIRD = 5;
var DIMINISHED_FIFTH = exports.DIMINISHED_FIFTH = 6;
var AUGMENTED_FOURTH = exports.AUGMENTED_FOURTH = 6;
var DIMINISHED_SIXTH = exports.DIMINISHED_SIXTH = 7;
var AUGMENTED_FIFTH = exports.AUGMENTED_FIFTH = 8;
var DIMINISHED_SEVENTH = exports.DIMINISHED_SEVENTH = 9;
var AUGMENTED_SIXTH = exports.AUGMENTED_SIXTH = 10;
var DIMINISHED_OCTAVE = exports.DIMINISHED_OCTAVE = 11;
var AUGMENTED_SEVENTH = exports.AUGMENTED_SEVENTH = 12;

var SEMITONE = exports.SEMITONE = 1;
var TONE = exports.TONE = 2;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* American names */
var MAXIMA = exports.MAXIMA = 8;
var LONGA = exports.LONGA = 4;
var DOUBLE_WHOLE_NOTE = exports.DOUBLE_WHOLE_NOTE = 2;
var WHOLE_NOTE = exports.WHOLE_NOTE = 1;
var HALF_NOTE = exports.HALF_NOTE = 1 / 2;
var QUARTER_NOTE = exports.QUARTER_NOTE = 1 / 4;
var EIGHT_NOTE = exports.EIGHT_NOTE = 1 / 8;
var SIXTEENTH_NOTE = exports.SIXTEENTH_NOTE = 1 / 16;
var THIRTY_SECOND_NOTE = exports.THIRTY_SECOND_NOTE = 1 / 30;
var SIXTY_FOURTH_NOTE = exports.SIXTY_FOURTH_NOTE = 1 / 64;
var HUNDRED_TWENTY_EIGHT_NOTE = exports.HUNDRED_TWENTY_EIGHT_NOTE = 1 / 128;
var TWO_HUNDRED_FIFTY_SIXTH_NOTE = exports.TWO_HUNDRED_FIFTY_SIXTH_NOTE = 1 / 256;

/* British names */
var BREVE = exports.BREVE = 2;
var SEMIBREVE = exports.SEMIBREVE = 1;
var MINIM = exports.MINIM = 1 / 2;
var CROTCHET = exports.CROTCHET = 1 / 4;
var QUAVER = exports.QUAVER = 1 / 8;
var SEMIQUAVER = exports.SEMIQUAVER = 1 / 16;
var DEMISEMIQUAVER = exports.DEMISEMIQUAVER = 1 / 64;
var SEMIHEMIDEMISEMIQUAVER = exports.SEMIHEMIDEMISEMIQUAVER = 1 / 128;
var DEMISEMIHEMIDEMISEMIQUAVER = exports.DEMISEMIHEMIDEMISEMIQUAVER = 1 / 256;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MINOR_SCALE = exports.MAJOR_SCALE = exports.LOCRIAN_MODE = exports.AEOLIAN_MODE = exports.MIXOLYDIAN_MODE = exports.LYDIAN_MODE = exports.PHRYGIAN_MODE = exports.DORIAN_MODE = exports.IONIAN_MODE = exports.WHOLE_TONE_SCALE = exports.CHROMATIC_SCALE = undefined;

var _intervals = require('./intervals');

var _modes = require('./modes');

var Modes = _interopRequireWildcard(_modes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CHROMATIC_SCALE = exports.CHROMATIC_SCALE = [_intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE, _intervals.SEMITONE];
var WHOLE_TONE_SCALE = exports.WHOLE_TONE_SCALE = [_intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.TONE];

var IONIAN_MODE = exports.IONIAN_MODE = [_intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE];
var DORIAN_MODE = exports.DORIAN_MODE = [_intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE];
var PHRYGIAN_MODE = exports.PHRYGIAN_MODE = [_intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE];
var LYDIAN_MODE = exports.LYDIAN_MODE = [_intervals.TONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE];
var MIXOLYDIAN_MODE = exports.MIXOLYDIAN_MODE = [_intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE];
var AEOLIAN_MODE = exports.AEOLIAN_MODE = [_intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE];
var LOCRIAN_MODE = exports.LOCRIAN_MODE = [_intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.SEMITONE, _intervals.TONE, _intervals.TONE, _intervals.TONE];

var MAJOR_SCALE = exports.MAJOR_SCALE = Modes.IONIAN_MODE;
var MINOR_SCALE = exports.MINOR_SCALE = Modes.AEOLIAN_MODE;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SECOND_INVERSION = exports.FIRST_INVERSION = exports.ROOT_POSITION = exports.DIMINISHED_TRIAD = exports.AUGMENTED_TRIAD = exports.MINOR_TRIAD = exports.MAJOR_TRIAD = undefined;

var _intervals = require('./intervals');

var MAJOR_TRIAD = exports.MAJOR_TRIAD = [_intervals.PERFECT_UNISON, _intervals.MAJOR_THIRD, _intervals.PERFECT_FIFTH];
var MINOR_TRIAD = exports.MINOR_TRIAD = [_intervals.PERFECT_UNISON, _intervals.MINOR_THIRD, _intervals.PERFECT_FIFTH];
var AUGMENTED_TRIAD = exports.AUGMENTED_TRIAD = [_intervals.PERFECT_UNISON, _intervals.MAJOR_THIRD, _intervals.AUGMENTED_FIFTH];
var DIMINISHED_TRIAD = exports.DIMINISHED_TRIAD = [_intervals.PERFECT_UNISON, _intervals.MINOR_THIRD, _intervals.DIMINISHED_FIFTH];

var ROOT_POSITION = exports.ROOT_POSITION = [_intervals.PERFECT_UNISON, _intervals.PERFECT_UNISON, _intervals.PERFECT_UNISON];
var FIRST_INVERSION = exports.FIRST_INVERSION = [_intervals.PERFECT_OCTAVE, _intervals.PERFECT_UNISON, _intervals.PERFECT_UNISON];
var SECOND_INVERSION = exports.SECOND_INVERSION = [_intervals.PERFECT_OCTAVE, _intervals.PERFECT_OCTAVE, _intervals.PERFECT_UNISON];
