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
	public static readonly ACTUAL = 9;
	public static readonly BREAK = 10;
	public static readonly CONTINUE = 11;
	public static readonly DO = 12;
	public static readonly ELSE = 13;
	public static readonly EXPECT = 14;
	public static readonly EXPORT = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly IMPORT = 18;
	public static readonly RETURN = 19;
	public static readonly WHILE = 20;
	public static readonly ASSIGN = 21;
	public static readonly COLON = 22;
	public static readonly COMMA = 23;
	public static readonly DOT = 24;
	public static readonly GENERIC_LEFT = 25;
	public static readonly GENERIC_RIGHT = 26;
	public static readonly QUESTION = 27;
	public static readonly FLOAT_LITERAL = 28;
	public static readonly INTEGER_LITERAL = 29;
	public static readonly STRING_LITERAL = 30;
	public static readonly PREPROCESSOR = 31;
	public static readonly ID = 32;
	public static readonly OPERATOR = 33;
	public static readonly NL = 34;
	public static readonly WS = 35;
	public static readonly BLOCK_COMMENT = 36;
	public static readonly LINE_COMMENT = 37;
	public static readonly UNEXPECTED = 38;
	public static readonly LINE_JOINING = 39;
	public static readonly ERROR = 2;
	public static readonly WHITESPACE = 3;
	public static readonly COMMENT_CHANNEL = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR", "WHITESPACE", "COMMENT_CHANNEL",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", "DO", "ELSE", "EXPECT", 
		"EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", "ASSIGN", "COLON", 
		"COMMA", "DOT", "GENERIC_LEFT", "GENERIC_RIGHT", "QUESTION", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "OPERATOR", 
		"NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED", "LINE_JOINING", 
		"Radix", "DigitNumber", "AlphabetNumber",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'='", "':'", "','", 
		"'.'", "'<|'", "'|>'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"ASSIGN", "COLON", "COMMA", "DOT", "GENERIC_LEFT", "GENERIC_RIGHT", "QUESTION", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "OPERATOR", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED", 
		"LINE_JOINING",
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

		case 31:
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
		case 31:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02)\u015C\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xC6\n\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\xCC\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\xD2\n\x1D\f\x1D\x0E\x1D\xD5\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\xDF\n\x1E\f\x1E\x0E\x1E\xE2\v" +
		"\x1E\x03\x1E\x03\x1E\x07\x1E\xE6\n\x1E\f\x1E\x0E\x1E\xE9\v\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x07\x1F\xEF\n\x1F\f\x1F\x0E\x1F\xF2\v\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05" +
		" \u0102\n \x03!\x03!\x03!\x05!\u0107\n!\x03!\x03!\x05!\u010B\n!\x03!\x05" +
		"!\u010E\n!\x05!\u0110\n!\x03!\x03!\x03\"\x06\"\u0115\n\"\r\"\x0E\"\u0116" +
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x07#\u0120\n#\f#\x0E#\u0123\v#\x03" +
		"#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x07$\u012E\n$\f$\x0E$\u0131" +
		"\v$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x07&\u013B\n&\f&\x0E&\u013E" +
		"\v&\x03&\x05&\u0141\n&\x03&\x03&\x05&\u0145\n&\x03&\x03&\x03\'\x03\'\x05" +
		"\'\u014B\n\'\x03\'\x03\'\x03(\x03(\x07(\u0151\n(\f(\x0E(\u0154\v(\x03" +
		")\x03)\x07)\u0158\n)\f)\x0E)\u015B\v)\x05\xE0\xE7\u0121\x02\x02*\x03\x02" +
		"\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02" +
		"\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D\x02\x12" +
		"\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02\x19-\x02" +
		"\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?" +
		"\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02)M\x02\x02O\x02\x02Q\x02\x02" +
		"\x03\x02\r\x03\x02))\n\x02))^^ddhhppttvvxx\x05\x02C\\aac|\x06\x022;C\\" +
		"aac|\x05\x02##\'\',`\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x03\x022;\x04" +
		"\x02ZZzz\x04\x022;aa\x05\x022;C\\c|\x02\u0175\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
		"7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
		"\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
		"\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
		"\x02\x02\x02\x03S\x03\x02\x02\x02\x05V\x03\x02\x02\x02\x07Y\x03\x02\x02" +
		"\x02\t\\\x03\x02\x02\x02\v_\x03\x02\x02\x02\rb\x03\x02\x02\x02\x0Fe\x03" +
		"\x02\x02\x02\x11l\x03\x02\x02\x02\x13r\x03\x02\x02\x02\x15{\x03\x02\x02" +
		"\x02\x17~\x03\x02\x02\x02\x19\x83\x03\x02\x02\x02\x1B\x8A\x03\x02\x02" +
		"\x02\x1D\x91\x03\x02\x02\x02\x1F\x95\x03\x02\x02\x02!\x98\x03\x02\x02" +
		"\x02#\x9F\x03\x02\x02\x02%\xA6\x03\x02\x02\x02\'\xAC\x03\x02\x02\x02)" +
		"\xAE\x03\x02\x02\x02+\xB0\x03\x02\x02\x02-\xB2\x03\x02\x02\x02/\xB4\x03" +
		"\x02\x02\x021\xB7\x03\x02\x02\x023\xBA\x03\x02\x02\x025\xC5\x03\x02\x02" +
		"\x027\xCB\x03\x02\x02\x029\xCD\x03\x02\x02\x02;\xD8\x03\x02\x02\x02=\xEC" +
		"\x03\x02\x02\x02?\u0101\x03\x02\x02\x02A\u010F\x03\x02\x02\x02C\u0114" +
		"\x03\x02\x02\x02E\u011A\x03\x02\x02\x02G\u0129\x03\x02\x02\x02I\u0134" +
		"\x03\x02\x02\x02K\u0138\x03\x02\x02\x02M\u0148\x03\x02\x02\x02O\u014E" +
		"\x03\x02\x02\x02Q\u0155\x03\x02\x02\x02ST\x07]\x02\x02TU\b\x02\x02\x02" +
		"U\x04\x03\x02\x02\x02VW\x07_\x02\x02WX\b\x03\x03\x02X\x06\x03\x02\x02" +
		"\x02YZ\x07*\x02\x02Z[\b\x04\x04\x02[\b\x03\x02\x02\x02\\]\x07+\x02\x02" +
		"]^\b\x05\x05\x02^\n\x03\x02\x02\x02_`\x07}\x02\x02`a\b\x06\x06\x02a\f" +
		"\x03\x02\x02\x02bc\x07\x7F\x02\x02cd\b\x07\x07\x02d\x0E\x03\x02\x02\x02" +
		"ef\x07c\x02\x02fg\x07e\x02\x02gh\x07v\x02\x02hi\x07w\x02\x02ij\x07c\x02" +
		"\x02jk\x07n\x02\x02k\x10\x03\x02\x02\x02lm\x07d\x02\x02mn\x07t\x02\x02" +
		"no\x07g\x02\x02op\x07c\x02\x02pq\x07m\x02\x02q\x12\x03\x02\x02\x02rs\x07" +
		"e\x02\x02st\x07q\x02\x02tu\x07p\x02\x02uv\x07v\x02\x02vw\x07k\x02\x02" +
		"wx\x07p\x02\x02xy\x07w\x02\x02yz\x07g\x02\x02z\x14\x03\x02\x02\x02{|\x07" +
		"f\x02\x02|}\x07q\x02\x02}\x16\x03\x02\x02\x02~\x7F\x07g\x02\x02\x7F\x80" +
		"\x07n\x02\x02\x80\x81\x07u\x02\x02\x81\x82\x07g\x02\x02\x82\x18\x03\x02" +
		"\x02\x02\x83\x84\x07g\x02\x02\x84\x85\x07z\x02\x02\x85\x86\x07r\x02\x02" +
		"\x86\x87\x07g\x02\x02\x87\x88\x07e\x02\x02\x88\x89\x07v\x02\x02\x89\x1A" +
		"\x03\x02\x02\x02\x8A\x8B\x07g\x02\x02\x8B\x8C\x07z\x02\x02\x8C\x8D\x07" +
		"r\x02\x02\x8D\x8E\x07q\x02\x02\x8E\x8F\x07t\x02\x02\x8F\x90\x07v\x02\x02" +
		"\x90\x1C\x03\x02\x02\x02\x91\x92\x07h\x02\x02\x92\x93\x07q\x02\x02\x93" +
		"\x94\x07t\x02\x02\x94\x1E\x03\x02\x02\x02\x95\x96\x07k\x02\x02\x96\x97" +
		"\x07h\x02\x02\x97 \x03\x02\x02\x02\x98\x99\x07k\x02\x02\x99\x9A\x07o\x02" +
		"\x02\x9A\x9B\x07r\x02\x02\x9B\x9C\x07q\x02\x02\x9C\x9D\x07t\x02\x02\x9D" +
		"\x9E\x07v\x02\x02\x9E\"\x03\x02\x02\x02\x9F\xA0\x07t\x02\x02\xA0\xA1\x07" +
		"g\x02\x02\xA1\xA2\x07v\x02\x02\xA2\xA3\x07w\x02\x02\xA3\xA4\x07t\x02\x02" +
		"\xA4\xA5\x07p\x02\x02\xA5$\x03\x02\x02\x02\xA6\xA7\x07y\x02\x02\xA7\xA8" +
		"\x07j\x02\x02\xA8\xA9\x07k\x02\x02\xA9\xAA\x07n\x02\x02\xAA\xAB\x07g\x02" +
		"\x02\xAB&\x03\x02\x02\x02\xAC\xAD\x07?\x02\x02\xAD(\x03\x02\x02\x02\xAE" +
		"\xAF\x07<\x02\x02\xAF*\x03\x02\x02\x02\xB0\xB1\x07.\x02\x02\xB1,\x03\x02" +
		"\x02\x02\xB2\xB3\x070\x02\x02\xB3.\x03\x02\x02\x02\xB4\xB5\x07>\x02\x02" +
		"\xB5\xB6\x07~\x02\x02\xB60\x03\x02\x02\x02\xB7\xB8\x07~\x02\x02\xB8\xB9" +
		"\x07@\x02\x02\xB92\x03\x02\x02\x02\xBA\xBB\x07A\x02\x02\xBB4\x03\x02\x02" +
		"\x02\xBC\xBD\x05M\'\x02\xBD\xBE\x05Q)\x02\xBE\xBF\x070\x02\x02\xBF\xC0" +
		"\x05Q)\x02\xC0\xC6\x03\x02\x02\x02\xC1\xC2\x05O(\x02\xC2\xC3\x070\x02" +
		"\x02\xC3\xC4\x05O(\x02\xC4\xC6\x03\x02\x02\x02\xC5\xBC\x03\x02\x02\x02" +
		"\xC5\xC1\x03\x02\x02\x02\xC66\x03\x02\x02\x02\xC7\xC8\x05M\'\x02\xC8\xC9" +
		"\x05Q)\x02\xC9\xCC\x03\x02\x02\x02\xCA\xCC\x05O(\x02\xCB\xC7\x03\x02\x02" +
		"\x02\xCB\xCA\x03\x02\x02\x02\xCC8\x03\x02\x02\x02\xCD\xD3\x07)\x02\x02" +
		"\xCE\xD2\n\x02\x02\x02\xCF\xD0\x07^\x02\x02\xD0\xD2\t\x03\x02\x02\xD1" +
		"\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3" +
		"\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5" +
		"\xD3\x03\x02\x02\x02\xD6\xD7\x07)\x02\x02\xD7:\x03\x02\x02\x02\xD8\xD9" +
		"\x07%\x02\x02\xD9\xDA\x07}\x02\x02\xDA\xE7\x03\x02\x02\x02\xDB\xE6\x05" +
		";\x1E\x02\xDC\xE0\x07}\x02\x02\xDD\xDF\v\x02\x02\x02\xDE\xDD\x03\x02\x02" +
		"\x02\xDF\xE2\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02" +
		"\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE6\x07\x7F\x02" +
		"\x02\xE4\xE6\v\x02\x02\x02\xE5\xDB\x03\x02\x02\x02\xE5\xDC\x03\x02\x02" +
		"\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7\x03\x02\x02" +
		"\x02\xEA\xEB\x07\x7F\x02\x02\xEB<\x03\x02\x02\x02\xEC\xF0\t\x04\x02\x02" +
		"\xED\xEF\t\x05\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02" +
		"\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1>\x03\x02\x02\x02" +
		"\xF2\xF0\x03\x02\x02\x02\xF3\u0102\t\x06\x02\x02\xF4\xF5\x070\x02\x02" +
		"\xF5\u0102\x070\x02\x02\xF6\xF7\x070\x02\x02\xF7\xF8\x070\x02\x02\xF8" +
		"\u0102\x070\x02\x02\xF9\xFA\x07>\x02\x02\xFA\u0102\x07?\x02\x02\xFB\xFC" +
		"\x07@\x02\x02\xFC\u0102\x07?\x02\x02\xFD\xFE\x07?\x02\x02\xFE\u0102\x07" +
		"?\x02\x02\xFF\u0100\x07#\x02\x02\u0100\u0102\x07?\x02\x02\u0101\xF3\x03" +
		"\x02\x02\x02\u0101\xF4\x03\x02\x02\x02\u0101\xF6\x03\x02\x02\x02\u0101" +
		"\xF9\x03\x02\x02\x02\u0101\xFB\x03\x02\x02\x02\u0101\xFD\x03\x02\x02\x02" +
		"\u0101\xFF\x03\x02\x02\x02\u0102@\x03\x02\x02\x02\u0103\u0104\x06!\x02" +
		"\x02\u0104\u0110\x05C\"\x02\u0105\u0107\x07\x0F\x02\x02\u0106\u0105\x03" +
		"\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
		"\u010B\x07\f\x02\x02\u0109\u010B\x07\x0F\x02\x02\u010A\u0106\x03\x02\x02" +
		"\x02\u010A\u0109\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C\u010E" +
		"\x05C\"\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0110\x03\x02\x02\x02\u010F\u0103\x03\x02\x02\x02\u010F\u010A\x03\x02" +
		"\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\b!\b\x02\u0112B\x03\x02" +
		"\x02\x02\u0113\u0115\t\x07\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0116" +
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
		"\u0117\u0118\x03\x02\x02\x02\u0118\u0119\b\"\t\x02\u0119D\x03\x02\x02" +
		"\x02\u011A\u011B\x071\x02\x02\u011B\u011C\x07,\x02\x02\u011C\u0121\x03" +
		"\x02\x02\x02\u011D\u0120\x05E#\x02\u011E\u0120\v\x02\x02\x02\u011F\u011D" +
		"\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0124\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x07,\x02\x02\u0125" +
		"\u0126\x071\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\b#\n\x02\u0128" +
		"F\x03\x02\x02\x02\u0129\u012A\x07/\x02\x02\u012A\u012B\x07/\x02\x02\u012B" +
		"\u012F\x03\x02\x02\x02\u012C\u012E\n\b\x02\x02\u012D\u012C\x03\x02\x02" +
		"\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130" +
		"\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02" +
		"\u0132\u0133\b$\n\x02\u0133H\x03\x02\x02\x02\u0134\u0135\v\x02\x02\x02" +
		"\u0135\u0136\x03\x02\x02\x02\u0136\u0137\b%\v\x02\u0137J\x03\x02\x02\x02" +
		"\u0138\u013C\x07^\x02\x02\u0139\u013B\t\x07\x02\x02\u013A\u0139\x03\x02" +
		"\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C" +
		"\u013D\x03\x02\x02\x02\u013D\u0144\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013F\u0141\x07\x0F\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0145\x07\f\x02" +
		"\x02\u0143\u0145\x04\x0E\x0F\x02\u0144\u0140\x03\x02\x02\x02\u0144\u0143" +
		"\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\b&\f\x02\u0147" +
		"L\x03\x02\x02\x02\u0148\u014A\t\t\x02\x02\u0149\u014B\t\t\x02\x02\u014A" +
		"\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02" +
		"\x02\x02\u014C\u014D\t\n\x02\x02\u014DN\x03\x02\x02\x02\u014E\u0152\t" +
		"\t\x02\x02\u014F\u0151\t\v\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151\u0154" +
		"\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
		"\u0153P\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0159\t\f\x02" +
		"\x02\u0156\u0158\t\x05\x02\x02\u0157\u0156\x03\x02\x02\x02\u0158\u015B" +
		"\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02" +
		"\u015AR\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\x1C\x02\xC5\xCB\xD1" +
		"\xD3\xE0\xE5\xE7\xF0\u0101\u0106\u010A\u010D\u010F\u0116\u011F\u0121\u012F" +
		"\u013C\u0140\u0144\u014A\u0150\u0152\u0157\u0159\r\x03\x02\x02\x03\x03" +
		"\x03\x03\x04\x04\x03\x05\x05\x03\x06\x06\x03\x07\x07\x03!\b\x02\x05\x02" +
		"\x02\x06\x02\x02\x04\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

