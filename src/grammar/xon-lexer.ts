// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
    import { XonLexerBase } from "./xon-lexer-base";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonLexer extends XonLexerBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly ABSTRACT = 9;
	public static readonly ACTUAL = 10;
	public static readonly AS = 11;
	public static readonly BREAK = 12;
	public static readonly CLASS = 13;
	public static readonly DO = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXPECT = 17;
	public static readonly EXPORT = 18;
	public static readonly EXTENSION = 19;
	public static readonly FOR = 20;
	public static readonly IF = 21;
	public static readonly IMPORT = 22;
	public static readonly IN = 23;
	public static readonly INFIX = 24;
	public static readonly IS = 25;
	public static readonly MODEL = 26;
	public static readonly NOT = 27;
	public static readonly OBJECT = 28;
	public static readonly POSTFIX = 29;
	public static readonly PREFIX = 30;
	public static readonly RETURN = 31;
	public static readonly TYPE = 32;
	public static readonly WHILE = 33;
	public static readonly AMPERSAND = 34;
	public static readonly AND = 35;
	public static readonly ASSIGN = 36;
	public static readonly ASTERISK = 37;
	public static readonly AT = 38;
	public static readonly BACK_SLASH = 39;
	public static readonly CARET = 40;
	public static readonly COALESCING = 41;
	public static readonly COLON = 42;
	public static readonly COMMA = 43;
	public static readonly DOT = 44;
	public static readonly EQUAL = 45;
	public static readonly EXCLAMATION = 46;
	public static readonly GREAT_EQUAL = 47;
	public static readonly GREAT = 48;
	public static readonly HASH = 49;
	public static readonly LESS_EQUAL = 50;
	public static readonly LESS = 51;
	public static readonly MINUS = 52;
	public static readonly MODULO = 53;
	public static readonly NOT_EQUAL = 54;
	public static readonly OR = 55;
	public static readonly PIPE = 56;
	public static readonly PLUS = 57;
	public static readonly QUESTION = 58;
	public static readonly RANGE = 59;
	public static readonly SLASH = 60;
	public static readonly SPREAD = 61;
	public static readonly TILDE = 62;
	public static readonly UNDERSCORE = 63;
	public static readonly FLOAT_LITERAL = 64;
	public static readonly INTEGER_LITERAL = 65;
	public static readonly CHAR_LITERAL = 66;
	public static readonly STRING_LITERAL = 67;
	public static readonly REGEX_LITERAL = 68;
	public static readonly PREPROCESSOR = 69;
	public static readonly ID = 70;
	public static readonly NL = 71;
	public static readonly COMMENT = 72;
	public static readonly WS = 73;
	public static readonly ERROR = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AS", "BREAK", "CLASS", "DO", "ELSE", 
		"ENUM", "EXPECT", "EXPORT", "EXTENSION", "FOR", "IF", "IMPORT", "IN", 
		"INFIX", "IS", "MODEL", "NOT", "OBJECT", "POSTFIX", "PREFIX", "RETURN", 
		"TYPE", "WHILE", "AMPERSAND", "AND", "ASSIGN", "ASTERISK", "AT", "BACK_SLASH", 
		"CARET", "COALESCING", "COLON", "COMMA", "DOT", "EQUAL", "EXCLAMATION", 
		"GREAT_EQUAL", "GREAT", "HASH", "LESS_EQUAL", "LESS", "MINUS", "MODULO", 
		"NOT_EQUAL", "OR", "PIPE", "PLUS", "QUESTION", "RANGE", "SLASH", "SPREAD", 
		"TILDE", "UNDERSCORE", "FLOAT_LITERAL", "INTEGER_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "REGEX_LITERAL", "PREPROCESSOR", "ID", "NL", "COMMENT", 
		"WS", "Radix", "DigitNumber", "AlphabetNumber",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'as'", "'break'", "'class'", "'do'", "'else'", 
		"'enum'", "'expect'", "'export'", "'extension'", "'for'", "'if'", "'import'", 
		"'in'", "'infix'", "'is'", "'model'", "'not'", "'object'", "'postfix'", 
		"'prefix'", "'return'", "'type'", "'while'", "'&'", "'&&'", "'='", "'*'", 
		"'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", "'=='", "'!'", "'>='", 
		"'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", "'||'", "'|'", "'+'", 
		"'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AS", 
		"BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FOR", "IF", "IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", "OBJECT", 
		"POSTFIX", "PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", "AND", "ASSIGN", 
		"ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", "COMMA", 
		"DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", "LESS_EQUAL", 
		"LESS", "MINUS", "MODULO", "NOT_EQUAL", "OR", "PIPE", "PLUS", "QUESTION", 
		"RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"CHAR_LITERAL", "STRING_LITERAL", "REGEX_LITERAL", "PREPROCESSOR", "ID", 
		"NL", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonLexer._LITERAL_NAMES, XonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XonLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 0:
			this.OPEN_BRACKET_action(_localctx, actionIndex);
			break;

		case 1:
			this.CLOSE_BRACKET_action(_localctx, actionIndex);
			break;

		case 2:
			this.OPEN_PAREN_action(_localctx, actionIndex);
			break;

		case 3:
			this.CLOSE_PAREN_action(_localctx, actionIndex);
			break;

		case 4:
			this.OPEN_BRACE_action(_localctx, actionIndex);
			break;

		case 5:
			this.CLOSE_BRACE_action(_localctx, actionIndex);
			break;

		case 68:
			this.NL_action(_localctx, actionIndex);
			break;
		}
	}
	private OPEN_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened--;
			break;
		}
	}
	private OPEN_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened++;
			break;
		}
	}
	private CLOSE_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened--;
			break;
		}
	}
	private OPEN_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened--;
			break;
		}
	}
	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.handleLineBreak()
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 68:
			return this.NL_sempred(_localctx, predIndex);
		}
		return true;
	}
	private NL_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02K\u01F2\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03" +
		"$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x030\x03" +
		"0\x031\x031\x031\x032\x032\x033\x033\x034\x034\x035\x035\x035\x036\x03" +
		"6\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03:\x03;\x03;\x03<\x03" +
		"<\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x05?\u0189\n?\x03@\x03@\x03@\x03@\x05@\u018F\n@\x03A\x03A\x03A" +
		"\x03A\x03B\x03B\x03B\x03B\x07B\u0199\nB\fB\x0EB\u019C\vB\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x07C\u01A4\nC\fC\x0EC\u01A7\vC\x03C\x03C\x03D\x03D\x03" +
		"D\x03D\x07D\u01AF\nD\fD\x0ED\u01B2\vD\x03D\x03D\x03E\x03E\x07E\u01B8\n" +
		"E\fE\x0EE\u01BB\vE\x03F\x03F\x03F\x05F\u01C0\nF\x03F\x03F\x05F\u01C4\n" +
		"F\x03F\x05F\u01C7\nF\x05F\u01C9\nF\x03F\x03F\x03G\x03G\x03G\x03G\x07G" +
		"\u01D1\nG\fG\x0EG\u01D4\vG\x03G\x03G\x03H\x06H\u01D9\nH\rH\x0EH\u01DA" +
		"\x03H\x03H\x03I\x03I\x05I\u01E1\nI\x03I\x03I\x03J\x03J\x07J\u01E7\nJ\f" +
		"J\x0EJ\u01EA\vJ\x03K\x03K\x07K\u01EE\nK\fK\x0EK\u01F1\vK\x03\u01B0\x02" +
		"\x02L\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F" +
		"\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02" +
		"\x11\x1D\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02\x17)\x02" +
		"\x18+\x02\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02" +
		" ;\x02!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+" +
		"Q\x02,S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x024c\x025e\x026g\x02" +
		"7i\x028k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02@{\x02A}\x02B\x7F" +
		"\x02C\x81\x02D\x83\x02E\x85\x02F\x87\x02G\x89\x02H\x8B\x02I\x8D\x02J\x8F" +
		"\x02K\x91\x02\x02\x93\x02\x02\x95\x02\x02\x03\x02\x0F\x03\x02))\x03\x02" +
		"$$\n\x02$$^^ddhhppttvvxx\x03\x02bb\x04\x02^^bb\x06\x02&&C\\aac|\x06\x02" +
		"2;C\\aac|\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x03\x022;\x04\x02ZZzz\x04" +
		"\x022;aa\x05\x022;C\\c|\x02\u01FF\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
		"\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
		"\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
		"\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02" +
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02" +
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02" +
		"\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02" +
		"\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02" +
		"\x02\x8F\x03\x02\x02\x02\x03\x97\x03\x02\x02\x02\x05\x9A\x03\x02\x02\x02" +
		"\x07\x9D\x03\x02\x02\x02\t\xA0\x03\x02\x02\x02\v\xA3\x03\x02\x02\x02\r" +
		"\xA6\x03\x02\x02\x02\x0F\xA9\x03\x02\x02\x02\x11\xB2\x03\x02\x02\x02\x13" +
		"\xB9\x03\x02\x02\x02\x15\xBC\x03\x02\x02\x02\x17\xC2\x03\x02\x02\x02\x19" +
		"\xC8\x03\x02\x02\x02\x1B\xCB\x03\x02\x02\x02\x1D\xD0\x03\x02\x02\x02\x1F" +
		"\xD5\x03\x02\x02\x02!\xDC\x03\x02\x02\x02#\xE3\x03\x02\x02\x02%\xED\x03" +
		"\x02\x02\x02\'\xF1\x03\x02\x02\x02)\xF4\x03\x02\x02\x02+\xFB\x03\x02\x02" +
		"\x02-\xFE\x03\x02\x02\x02/\u0104\x03\x02\x02\x021\u0107\x03\x02\x02\x02" +
		"3\u010D\x03\x02\x02\x025\u0111\x03\x02\x02\x027\u0118\x03\x02\x02\x02" +
		"9\u0120\x03\x02\x02\x02;\u0127\x03\x02\x02\x02=\u012E\x03\x02\x02\x02" +
		"?\u0133\x03\x02\x02\x02A\u0139\x03\x02\x02\x02C\u013B\x03\x02\x02\x02" +
		"E\u013E\x03\x02\x02\x02G\u0140\x03\x02\x02\x02I\u0142\x03\x02\x02\x02" +
		"K\u0144\x03\x02\x02\x02M\u0146\x03\x02\x02\x02O\u0148\x03\x02\x02\x02" +
		"Q\u014B\x03\x02\x02\x02S\u014D\x03\x02\x02\x02U\u014F\x03\x02\x02\x02" +
		"W\u0151\x03\x02\x02\x02Y\u0154\x03\x02\x02\x02[\u0156\x03\x02\x02\x02" +
		"]\u0159\x03\x02\x02\x02_\u015B\x03\x02\x02\x02a\u015D\x03\x02\x02\x02" +
		"c\u0160\x03\x02\x02\x02e\u0162\x03\x02\x02\x02g\u0164\x03\x02\x02\x02" +
		"i\u0166\x03\x02\x02\x02k\u0169\x03\x02\x02\x02m\u016C\x03\x02\x02\x02" +
		"o\u016E\x03\x02\x02\x02q\u0170\x03\x02\x02\x02s\u0172\x03\x02\x02\x02" +
		"u\u0175\x03\x02\x02\x02w\u0177\x03\x02\x02\x02y\u017B\x03\x02\x02\x02" +
		"{\u017D\x03\x02\x02\x02}\u0188\x03\x02\x02\x02\x7F\u018E\x03\x02\x02\x02" +
		"\x81\u0190\x03\x02\x02\x02\x83\u0194\x03\x02\x02\x02\x85\u019F\x03\x02" +
		"\x02\x02\x87\u01AA\x03\x02\x02\x02\x89\u01B5\x03\x02\x02\x02\x8B\u01C8" +
		"\x03\x02\x02\x02\x8D\u01CC\x03\x02\x02\x02\x8F\u01D8\x03\x02\x02\x02\x91" +
		"\u01DE\x03\x02\x02\x02\x93\u01E4\x03\x02\x02\x02\x95\u01EB\x03\x02\x02" +
		"\x02\x97\x98\x07]\x02\x02\x98\x99\b\x02\x02\x02\x99\x04\x03\x02\x02\x02" +
		"\x9A\x9B\x07_\x02\x02\x9B\x9C\b\x03\x03\x02\x9C\x06\x03\x02\x02\x02\x9D" +
		"\x9E\x07*\x02\x02\x9E\x9F\b\x04\x04\x02\x9F\b\x03\x02\x02\x02\xA0\xA1" +
		"\x07+\x02\x02\xA1\xA2\b\x05\x05\x02\xA2\n\x03\x02\x02\x02\xA3\xA4\x07" +
		"}\x02\x02\xA4\xA5\b\x06\x06\x02\xA5\f\x03\x02\x02\x02\xA6\xA7\x07\x7F" +
		"\x02\x02\xA7\xA8\b\x07\x07\x02\xA8\x0E\x03\x02\x02\x02\xA9\xAA\x07c\x02" +
		"\x02\xAA\xAB\x07d\x02\x02\xAB\xAC\x07u\x02\x02\xAC\xAD\x07v\x02\x02\xAD" +
		"\xAE\x07t\x02\x02\xAE\xAF\x07c\x02\x02\xAF\xB0\x07e\x02\x02\xB0\xB1\x07" +
		"v\x02\x02\xB1\x10\x03\x02\x02\x02\xB2\xB3\x07c\x02\x02\xB3\xB4\x07e\x02" +
		"\x02\xB4\xB5\x07v\x02\x02\xB5\xB6\x07w\x02\x02\xB6\xB7\x07c\x02\x02\xB7" +
		"\xB8\x07n\x02\x02\xB8\x12\x03\x02\x02\x02\xB9\xBA\x07c\x02\x02\xBA\xBB" +
		"\x07u\x02\x02\xBB\x14\x03\x02\x02\x02\xBC\xBD\x07d\x02\x02\xBD\xBE\x07" +
		"t\x02\x02\xBE\xBF\x07g\x02\x02\xBF\xC0\x07c\x02\x02\xC0\xC1\x07m\x02\x02" +
		"\xC1\x16\x03\x02\x02\x02\xC2\xC3\x07e\x02\x02\xC3\xC4\x07n\x02\x02\xC4" +
		"\xC5\x07c\x02\x02\xC5\xC6\x07u\x02\x02\xC6\xC7\x07u\x02\x02\xC7\x18\x03" +
		"\x02\x02\x02\xC8\xC9\x07f\x02\x02\xC9\xCA\x07q\x02\x02\xCA\x1A\x03\x02" +
		"\x02\x02\xCB\xCC\x07g\x02\x02\xCC\xCD\x07n\x02\x02\xCD\xCE\x07u\x02\x02" +
		"\xCE\xCF\x07g\x02\x02\xCF\x1C\x03\x02\x02\x02\xD0\xD1\x07g\x02\x02\xD1" +
		"\xD2\x07p\x02\x02\xD2\xD3\x07w\x02\x02\xD3\xD4\x07o\x02\x02\xD4\x1E\x03" +
		"\x02\x02\x02\xD5\xD6\x07g\x02\x02\xD6\xD7\x07z\x02\x02\xD7\xD8\x07r\x02" +
		"\x02\xD8\xD9\x07g\x02\x02\xD9\xDA\x07e\x02\x02\xDA\xDB\x07v\x02\x02\xDB" +
		" \x03\x02\x02\x02\xDC\xDD\x07g\x02\x02\xDD\xDE\x07z\x02\x02\xDE\xDF\x07" +
		"r\x02\x02\xDF\xE0\x07q\x02\x02\xE0\xE1\x07t\x02\x02\xE1\xE2\x07v\x02\x02" +
		"\xE2\"\x03\x02\x02\x02\xE3\xE4\x07g\x02\x02\xE4\xE5\x07z\x02\x02\xE5\xE6" +
		"\x07v\x02\x02\xE6\xE7\x07g\x02\x02\xE7\xE8\x07p\x02\x02\xE8\xE9\x07u\x02" +
		"\x02\xE9\xEA\x07k\x02\x02\xEA\xEB\x07q\x02\x02\xEB\xEC\x07p\x02\x02\xEC" +
		"$\x03\x02\x02\x02\xED\xEE\x07h\x02\x02\xEE\xEF\x07q\x02\x02\xEF\xF0\x07" +
		"t\x02\x02\xF0&\x03\x02\x02\x02\xF1\xF2\x07k\x02\x02\xF2\xF3\x07h\x02\x02" +
		"\xF3(\x03\x02\x02\x02\xF4\xF5\x07k\x02\x02\xF5\xF6\x07o\x02\x02\xF6\xF7" +
		"\x07r\x02\x02\xF7\xF8\x07q\x02\x02\xF8\xF9\x07t\x02\x02\xF9\xFA\x07v\x02" +
		"\x02\xFA*\x03\x02\x02\x02\xFB\xFC\x07k\x02\x02\xFC\xFD\x07p\x02\x02\xFD" +
		",\x03\x02\x02\x02\xFE\xFF\x07k\x02\x02\xFF\u0100\x07p\x02\x02\u0100\u0101" +
		"\x07h\x02\x02\u0101\u0102\x07k\x02\x02\u0102\u0103\x07z\x02\x02\u0103" +
		".\x03\x02\x02\x02\u0104\u0105\x07k\x02\x02\u0105\u0106\x07u\x02\x02\u0106" +
		"0\x03\x02\x02\x02\u0107\u0108\x07o\x02\x02\u0108\u0109\x07q\x02\x02\u0109" +
		"\u010A\x07f\x02\x02\u010A\u010B\x07g\x02\x02\u010B\u010C\x07n\x02\x02" +
		"\u010C2\x03\x02\x02\x02\u010D\u010E\x07p\x02\x02\u010E\u010F\x07q\x02" +
		"\x02\u010F\u0110\x07v\x02\x02\u01104\x03\x02\x02\x02\u0111\u0112\x07q" +
		"\x02\x02\u0112\u0113\x07d\x02\x02\u0113\u0114\x07l\x02\x02\u0114\u0115" +
		"\x07g\x02\x02\u0115\u0116\x07e\x02\x02\u0116\u0117\x07v\x02\x02\u0117" +
		"6\x03\x02\x02\x02\u0118\u0119\x07r\x02\x02\u0119\u011A\x07q\x02\x02\u011A" +
		"\u011B\x07u\x02\x02\u011B\u011C\x07v\x02\x02\u011C\u011D\x07h\x02\x02" +
		"\u011D\u011E\x07k\x02\x02\u011E\u011F\x07z\x02\x02\u011F8\x03\x02\x02" +
		"\x02\u0120\u0121\x07r\x02\x02\u0121\u0122\x07t\x02\x02\u0122\u0123\x07" +
		"g\x02\x02\u0123\u0124\x07h\x02\x02\u0124\u0125\x07k\x02\x02\u0125\u0126" +
		"\x07z\x02\x02\u0126:\x03\x02\x02\x02\u0127\u0128\x07t\x02\x02\u0128\u0129" +
		"\x07g\x02\x02\u0129\u012A\x07v\x02\x02\u012A\u012B\x07w\x02\x02\u012B" +
		"\u012C\x07t\x02\x02\u012C\u012D\x07p\x02\x02\u012D<\x03\x02\x02\x02\u012E" +
		"\u012F\x07v\x02\x02\u012F\u0130\x07{\x02\x02\u0130\u0131\x07r\x02\x02" +
		"\u0131\u0132\x07g\x02\x02\u0132>\x03\x02\x02\x02\u0133\u0134\x07y\x02" +
		"\x02\u0134\u0135\x07j\x02\x02\u0135\u0136\x07k\x02\x02\u0136\u0137\x07" +
		"n\x02\x02\u0137\u0138\x07g\x02\x02\u0138@\x03\x02\x02\x02\u0139\u013A" +
		"\x07(\x02\x02\u013AB\x03\x02\x02\x02\u013B\u013C\x07(\x02\x02\u013C\u013D" +
		"\x07(\x02\x02\u013DD\x03\x02\x02\x02\u013E\u013F\x07?\x02\x02\u013FF\x03" +
		"\x02\x02\x02\u0140\u0141\x07,\x02\x02\u0141H\x03\x02\x02\x02\u0142\u0143" +
		"\x07B\x02\x02\u0143J\x03\x02\x02\x02\u0144\u0145\x07^\x02\x02\u0145L\x03" +
		"\x02\x02\x02\u0146\u0147\x07`\x02\x02\u0147N\x03\x02\x02\x02\u0148\u0149" +
		"\x07A\x02\x02\u0149\u014A\x070\x02\x02\u014AP\x03\x02\x02\x02\u014B\u014C" +
		"\x07<\x02\x02\u014CR\x03\x02\x02\x02\u014D\u014E\x07.\x02\x02\u014ET\x03" +
		"\x02\x02\x02\u014F\u0150\x070\x02\x02\u0150V\x03\x02\x02\x02\u0151\u0152" +
		"\x07?\x02\x02\u0152\u0153\x07?\x02\x02\u0153X\x03\x02\x02\x02\u0154\u0155" +
		"\x07#\x02\x02\u0155Z\x03\x02\x02\x02\u0156\u0157\x07@\x02\x02\u0157\u0158" +
		"\x07?\x02\x02\u0158\\\x03\x02\x02\x02\u0159\u015A\x07@\x02\x02\u015A^" +
		"\x03\x02\x02\x02\u015B\u015C\x07%\x02\x02\u015C`\x03\x02\x02\x02\u015D" +
		"\u015E\x07>\x02\x02\u015E\u015F\x07?\x02\x02\u015Fb\x03\x02\x02\x02\u0160" +
		"\u0161\x07>\x02\x02\u0161d\x03\x02\x02\x02\u0162\u0163\x07/\x02\x02\u0163" +
		"f\x03\x02\x02\x02\u0164\u0165\x07\'\x02\x02\u0165h\x03\x02\x02\x02\u0166" +
		"\u0167\x07#\x02\x02\u0167\u0168\x07?\x02\x02\u0168j\x03\x02\x02\x02\u0169" +
		"\u016A\x07~\x02\x02\u016A\u016B\x07~\x02\x02\u016Bl\x03\x02\x02\x02\u016C" +
		"\u016D\x07~\x02\x02\u016Dn\x03\x02\x02\x02\u016E\u016F\x07-\x02\x02\u016F" +
		"p\x03\x02\x02\x02\u0170\u0171\x07A\x02\x02\u0171r\x03\x02\x02\x02\u0172" +
		"\u0173\x070\x02\x02\u0173\u0174\x070\x02\x02\u0174t\x03\x02\x02\x02\u0175" +
		"\u0176\x071\x02\x02\u0176v\x03\x02\x02\x02\u0177\u0178\x070\x02\x02\u0178" +
		"\u0179\x070\x02\x02\u0179\u017A\x070\x02\x02\u017Ax\x03\x02\x02\x02\u017B" +
		"\u017C\x07\x80\x02\x02\u017Cz\x03\x02\x02\x02\u017D\u017E\x07a\x02\x02" +
		"\u017E|\x03\x02\x02\x02\u017F\u0180\x05\x91I\x02\u0180\u0181\x05\x95K" +
		"\x02\u0181\u0182\x070\x02\x02\u0182\u0183\x05\x95K\x02\u0183\u0189\x03" +
		"\x02\x02\x02\u0184\u0185\x05\x93J\x02\u0185\u0186\x070\x02\x02\u0186\u0187" +
		"\x05\x93J\x02\u0187\u0189\x03\x02\x02\x02\u0188\u017F\x03\x02\x02\x02" +
		"\u0188\u0184\x03\x02\x02\x02\u0189~\x03\x02\x02\x02\u018A\u018B\x05\x91" +
		"I\x02\u018B\u018C\x05\x95K\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018F" +
		"\x05\x93J\x02\u018E\u018A\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02" +
		"\u018F\x80\x03\x02\x02\x02\u0190\u0191\x07)\x02\x02\u0191\u0192\n\x02" +
		"\x02\x02\u0192\u0193\x07)\x02\x02\u0193\x82\x03\x02\x02\x02\u0194\u019A" +
		"\x07$\x02\x02\u0195\u0199\n\x03\x02\x02\u0196\u0197\x07^\x02\x02\u0197" +
		"\u0199\t\x04\x02\x02\u0198\u0195\x03\x02\x02\x02\u0198\u0196\x03\x02\x02" +
		"\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B" +
		"\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02" +
		"\u019D\u019E\x07$\x02\x02\u019E\x84\x03\x02\x02\x02\u019F\u01A5\x07b\x02" +
		"\x02\u01A0\u01A4\n\x05\x02\x02\u01A1\u01A2\x07^\x02\x02\u01A2\u01A4\t" +
		"\x06\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4" +
		"\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02" +
		"\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8" +
		"\u01A9\x07b\x02\x02\u01A9\x86\x03\x02\x02\x02\u01AA\u01AB\x07%\x02\x02" +
		"\u01AB\u01AC\x07}\x02\x02\u01AC\u01B0\x03\x02\x02\x02\u01AD\u01AF\v\x02" +
		"\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0" +
		"\u01B1\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B3\x03\x02" +
		"\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B4\x07\x7F\x02\x02\u01B4" +
		"\x88\x03\x02\x02\x02\u01B5\u01B9\t\x07\x02\x02\u01B6\u01B8\t\b\x02\x02" +
		"\u01B7\u01B6\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03" +
		"\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\x8A\x03\x02\x02\x02\u01BB" +
		"\u01B9\x03\x02\x02\x02\u01BC\u01BD\x06F\x02\x02\u01BD\u01C9\x05\x8FH\x02" +
		"\u01BE\u01C0\x07\x0F\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03" +
		"\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x07\f\x02\x02\u01C2" +
		"\u01C4\x07\x0F\x02\x02\u01C3\u01BF\x03\x02\x02\x02\u01C3\u01C2\x03\x02" +
		"\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C7\x05\x8FH\x02\u01C6\u01C5" +
		"\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02" +
		"\u01C8\u01BC\x03\x02\x02\x02\u01C8\u01C3\x03\x02\x02\x02\u01C9\u01CA\x03" +
		"\x02\x02\x02\u01CA\u01CB\bF\b\x02\u01CB\x8C\x03\x02\x02\x02\u01CC\u01CD" +
		"\x07/\x02\x02\u01CD\u01CE\x07/\x02\x02\u01CE\u01D2\x03\x02\x02\x02\u01CF" +
		"\u01D1\n\t\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02" +
		"\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5" +
		"\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01D6\bG\t\x02\u01D6" +
		"\x8E\x03\x02\x02\x02\u01D7\u01D9\t\n\x02\x02\u01D8\u01D7\x03\x02\x02\x02" +
		"\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03" +
		"\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\bH\n\x02\u01DD\x90" +
		"\x03\x02\x02\x02\u01DE\u01E0\t\v\x02\x02\u01DF\u01E1\t\v\x02\x02\u01E0" +
		"\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02" +
		"\x02\x02\u01E2\u01E3\t\f\x02\x02\u01E3\x92\x03\x02\x02\x02\u01E4\u01E8" +
		"\t\v\x02\x02\u01E5\u01E7\t\r\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7" +
		"\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02" +
		"\x02\x02\u01E9\x94\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01EF" +
		"\t\x0E\x02\x02\u01EC\u01EE\t\b\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE" +
		"\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
		"\x02\x02\u01F0\x96\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\x16\x02" +
		"\u0188\u018E\u0198\u019A\u01A3\u01A5\u01B0\u01B9\u01BF\u01C3\u01C6\u01C8" +
		"\u01D2\u01DA\u01E0\u01E6\u01E8\u01ED\u01EF\v\x03\x02\x02\x03\x03\x03\x03" +
		"\x04\x04\x03\x05\x05\x03\x06\x06\x03\x07\x07\x03F\b\x02\x04\x02\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

