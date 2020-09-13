// Generated from XonLexer.g4 by ANTLR 4.7.3-SNAPSHOT

 
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
	public static readonly As = 3;
	public static readonly If = 4;
	public static readonly Else = 5;
	public static readonly ElseIf = 6;
	public static readonly Loop = 7;
	public static readonly In = 8;
	public static readonly Pass = 9;
	public static readonly Continue = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly Select = 13;
	public static readonly Preprocessor = 14;
	public static readonly LineBreak = 15;
	public static readonly BitAnd = 16;
	public static readonly BitOr = 17;
	public static readonly BitXor = 18;
	public static readonly BitNot = 19;
	public static readonly RightShiftArithmetic = 20;
	public static readonly LeftShiftArithmetic = 21;
	public static readonly OpenBracket = 22;
	public static readonly CloseBracket = 23;
	public static readonly OpenParen = 24;
	public static readonly CloseParen = 25;
	public static readonly OpenBrace = 26;
	public static readonly CloseBrace = 27;
	public static readonly Ad = 28;
	public static readonly Comma = 29;
	public static readonly Assign = 30;
	public static readonly Question = 31;
	public static readonly Colon = 32;
	public static readonly Dot = 33;
	public static readonly Add = 34;
	public static readonly Substract = 35;
	public static readonly Not = 36;
	public static readonly Multiply = 37;
	public static readonly Divide = 38;
	public static readonly Modulo = 39;
	public static readonly Pow = 40;
	public static readonly Sharp = 41;
	public static readonly LessThan = 42;
	public static readonly MoreThan = 43;
	public static readonly LessThanEquals = 44;
	public static readonly MoreThanEquals = 45;
	public static readonly Equals = 46;
	public static readonly NotEquals = 47;
	public static readonly And = 48;
	public static readonly Or = 49;
	public static readonly MultiplyAssign = 50;
	public static readonly DivideAssign = 51;
	public static readonly ModuloAssign = 52;
	public static readonly AddAssign = 53;
	public static readonly SubstractAssign = 54;
	public static readonly LeftShiftArithmeticAssign = 55;
	public static readonly RightShiftArithmeticAssign = 56;
	public static readonly BitAndAssign = 57;
	public static readonly BitXorAssign = 58;
	public static readonly BitOrAssign = 59;
	public static readonly LambdaStart = 60;
	public static readonly Pipe = 61;
	public static readonly Underscore = 62;
	public static readonly Spread = 63;
	public static readonly NullLiteral = 64;
	public static readonly BooleanLiteral = 65;
	public static readonly NumberLiteral = 66;
	public static readonly StringLiteral = 67;
	public static readonly StringFormatStart = 68;
	public static readonly StringFormatMiddle = 69;
	public static readonly StringFormatEnd = 70;
	public static readonly ID = 71;
	public static readonly DefinitionID = 72;
	public static readonly Skip = 73;
	public static readonly UnexpectedCharacter = 74;
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
		"As", "If", "Else", "ElseIf", "Loop", "In", "Pass", "Continue", "Break", 
		"Return", "Select", "Preprocessor", "LineBreak", "BitAnd", "BitOr", "BitXor", 
		"BitNot", "RightShiftArithmetic", "LeftShiftArithmetic", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"Ad", "Comma", "Assign", "Question", "Colon", "Dot", "Add", "Substract", 
		"Not", "Multiply", "Divide", "Modulo", "Pow", "Sharp", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"MultiplyAssign", "DivideAssign", "ModuloAssign", "AddAssign", "SubstractAssign", 
		"LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "Spread", 
		"NullLiteral", "BooleanLiteral", "NumberLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "DefinitionID", "Skip", 
		"UnexpectedCharacter", "SPACES", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", 
		"LINE_JOINING", "NUMBER", "CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'elif'", "'loop'", 
		"'in'", "'pass'", "'continue'", "'break'", "'return'", "'select'", undefined, 
		undefined, "'and'", "'or'", "'xor'", "'not'", "'>>'", "'<<'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'@'", "','", "'='", "'?'", "':'", "'.'", 
		"'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", "'>'", 
		"'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", undefined, undefined, undefined, "'\\'", 
		"'|'", "'_'", "'...'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "ElseIf", "Loop", "In", 
		"Pass", "Continue", "Break", "Return", "Select", "Preprocessor", "LineBreak", 
		"BitAnd", "BitOr", "BitXor", "BitNot", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "Ad", "Comma", "Assign", "Question", "Colon", "Dot", "Add", 
		"Substract", "Not", "Multiply", "Divide", "Modulo", "Pow", "Sharp", "LessThan", 
		"MoreThan", "LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", 
		"And", "Or", "MultiplyAssign", "DivideAssign", "ModuloAssign", "AddAssign", 
		"SubstractAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", 
		"Underscore", "Spread", "NullLiteral", "BooleanLiteral", "NumberLiteral", 
		"StringLiteral", "StringFormatStart", "StringFormatMiddle", "StringFormatEnd", 
		"ID", "DefinitionID", "Skip", "UnexpectedCharacter",
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
		case 12:
			this.LineBreak_action(_localctx, actionIndex);
			break;

		case 19:
			this.OpenBracket_action(_localctx, actionIndex);
			break;

		case 20:
			this.CloseBracket_action(_localctx, actionIndex);
			break;

		case 21:
			this.OpenParen_action(_localctx, actionIndex);
			break;

		case 22:
			this.CloseParen_action(_localctx, actionIndex);
			break;

		case 23:
			this.OpenBrace_action(_localctx, actionIndex);
			break;

		case 24:
			this.CloseBrace_action(_localctx, actionIndex);
			break;
		}
	}
	private LineBreak_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.handleLineBreak()
			break;
		}
	}
	private OpenBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened++;
			break;
		}
	}
	private CloseBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened--;
			break;
		}
	}
	private OpenParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened++;
			break;
		}
	}
	private CloseParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened--;
			break;
		}
	}
	private OpenBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened++;
			break;
		}
	}
	private CloseBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.opened--;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.LineBreak_sempred(_localctx, predIndex);
		}
		return true;
	}
	private LineBreak_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02L\u0225\b\x01" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x06" +
		"\r\xDE\n\r\r\r\x0E\r\xDF\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xE5\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xE9\n\x0E\x03\x0E\x05\x0E\xEC\n\x0E\x05\x0E\xEE\n" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03" +
		"!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03" +
		"(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03" +
		"-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x032\x03" +
		"2\x032\x033\x033\x033\x034\x034\x034\x035\x035\x035\x036\x036\x036\x03" +
		"6\x037\x037\x037\x037\x038\x038\x038\x038\x038\x038\x039\x039\x039\x03" +
		"9\x039\x039\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03" +
		">\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x05@\u018B\n@\x03A\x03A\x05A\u018F\nA\x03A\x03A\x05A" +
		"\u0193\nA\x03B\x03B\x07B\u0197\nB\fB\x0EB\u019A\vB\x03B\x03B\x03C\x03" +
		"C\x03C\x03C\x07C\u01A2\nC\fC\x0EC\u01A5\vC\x03C\x03C\x03D\x03D\x07D\u01AB" +
		"\nD\fD\x0ED\u01AE\vD\x03D\x03D\x03E\x03E\x07E\u01B4\nE\fE\x0EE\u01B7\v" +
		"E\x03E\x03E\x03F\x03F\x07F\u01BD\nF\fF\x0EF\u01C0\vF\x03G\x03G\x07G\u01C4" +
		"\nG\fG\x0EG\u01C7\vG\x03H\x03H\x03H\x03H\x05H\u01CD\nH\x03H\x03H\x03I" +
		"\x03I\x03I\x03I\x03J\x06J\u01D6\nJ\rJ\x0EJ\u01D7\x03K\x03K\x03K\x03K\x07" +
		"K\u01DE\nK\fK\x0EK\u01E1\vK\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x07L\u01EA" +
		"\nL\fL\x0EL\u01ED\vL\x03M\x03M\x05M\u01F1\nM\x03M\x05M\u01F4\nM\x03M\x03" +
		"M\x05M\u01F8\nM\x03N\x03N\x05N\u01FC\nN\x03N\x03N\x06N\u0200\nN\rN\x0E" +
		"N\u0201\x03N\x03N\x06N\u0206\nN\rN\x0EN\u0207\x07N\u020A\nN\fN\x0EN\u020D" +
		"\vN\x03N\x06N\u0210\nN\rN\x0EN\u0211\x03N\x03N\x06N\u0216\nN\rN\x0EN\u0217" +
		"\x07N\u021A\nN\fN\x0EN\u021D\vN\x05N\u021F\nN\x03O\x03O\x03O\x05O\u0224" +
		"\nO\x03\u01DF\x02\x02P\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02" +
		"\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02" +
		"\x10\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'" +
		"\x02\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E" +
		"7\x02\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02" +
		")M\x02*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x024c\x02" +
		"5e\x026g\x027i\x028k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02@{\x02" +
		"A}\x02B\x7F\x02C\x81\x02D\x83\x02E\x85\x02F\x87\x02G\x89\x02H\x8B\x02" +
		"I\x8D\x02J\x8F\x02K\x91\x02L\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02" +
		"\x02\x9B\x02\x02\x9D\x02\x02\x03\x02\v\x04\x02\f\f\x0F\x0F\x04\x02aac" +
		"|\x06\x022;C\\aac|\x04\x02C\\aa\x04\x02\v\v\"\"\x03\x022;\x05\x022;C\\" +
		"c|\x03\x02))\v\x02$$))^^ddhhppttvvxx\x02\u023E\x02\x03\x03\x02\x02\x02" +
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
		"\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
		"\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
		"Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
		"\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02" +
		"\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03" +
		"\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02" +
		"\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02" +
		"{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81" +
		"\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87" +
		"\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D" +
		"\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x03\x9F" +
		"\x03\x02\x02\x02\x05\xA2\x03\x02\x02\x02\x07\xA5\x03\x02\x02\x02\t\xAA" +
		"\x03\x02\x02\x02\v\xAF\x03\x02\x02\x02\r\xB4\x03\x02\x02\x02\x0F\xB7\x03" +
		"\x02\x02\x02\x11\xBC\x03\x02\x02\x02\x13\xC5\x03\x02\x02\x02\x15\xCB\x03" +
		"\x02\x02\x02\x17\xD2\x03\x02\x02\x02\x19\xD9\x03\x02\x02\x02\x1B\xED\x03" +
		"\x02\x02\x02\x1D\xF1\x03\x02\x02\x02\x1F\xF5\x03\x02\x02\x02!\xF8\x03" +
		"\x02\x02\x02#\xFC\x03\x02\x02\x02%\u0100\x03\x02\x02\x02\'\u0103\x03\x02" +
		"\x02\x02)\u0106\x03\x02\x02\x02+\u0109\x03\x02\x02\x02-\u010C\x03\x02" +
		"\x02\x02/\u010F\x03\x02\x02\x021\u0112\x03\x02\x02\x023\u0115\x03\x02" +
		"\x02\x025\u0118\x03\x02\x02\x027\u011A\x03\x02\x02\x029\u011C\x03\x02" +
		"\x02\x02;\u011E\x03\x02\x02\x02=\u0120\x03\x02\x02\x02?\u0122\x03\x02" +
		"\x02\x02A\u0124\x03\x02\x02\x02C\u0126\x03\x02\x02\x02E\u0128\x03\x02" +
		"\x02\x02G\u012A\x03\x02\x02\x02I\u012C\x03\x02\x02\x02K\u012E\x03\x02" +
		"\x02\x02M\u0130\x03\x02\x02\x02O\u0132\x03\x02\x02\x02Q\u0134\x03\x02" +
		"\x02\x02S\u0136\x03\x02\x02\x02U\u0138\x03\x02\x02\x02W\u013B\x03\x02" +
		"\x02\x02Y\u013E\x03\x02\x02\x02[\u0141\x03\x02\x02\x02]\u0144\x03\x02" +
		"\x02\x02_\u0147\x03\x02\x02\x02a\u014A\x03\x02\x02\x02c\u014D\x03\x02" +
		"\x02\x02e\u0150\x03\x02\x02\x02g\u0153\x03\x02\x02\x02i\u0156\x03\x02" +
		"\x02\x02k\u0159\x03\x02\x02\x02m\u015D\x03\x02\x02\x02o\u0161\x03\x02" +
		"\x02\x02q\u0167\x03\x02\x02\x02s\u016D\x03\x02\x02\x02u\u0172\x03\x02" +
		"\x02\x02w\u0174\x03\x02\x02\x02y\u0176\x03\x02\x02\x02{\u0178\x03\x02" +
		"\x02\x02}\u017C\x03\x02\x02\x02\x7F\u018A\x03\x02\x02\x02\x81\u0192\x03" +
		"\x02\x02\x02\x83\u0194\x03\x02\x02\x02\x85\u019D\x03\x02\x02\x02\x87\u01A8" +
		"\x03\x02\x02\x02\x89\u01B1\x03\x02\x02\x02\x8B\u01BA\x03\x02\x02\x02\x8D" +
		"\u01C1\x03\x02\x02\x02\x8F\u01CC\x03\x02\x02\x02\x91\u01D0\x03\x02\x02" +
		"\x02\x93\u01D5\x03\x02\x02\x02\x95\u01D9\x03\x02\x02\x02\x97\u01E5\x03" +
		"\x02\x02\x02\x99\u01EE\x03\x02\x02\x02\x9B\u021E\x03\x02\x02\x02\x9D\u0223" +
		"\x03\x02\x02\x02\x9F\xA0\x07c\x02\x02\xA0\xA1\x07u\x02\x02\xA1\x04\x03" +
		"\x02\x02\x02\xA2\xA3\x07k\x02\x02\xA3\xA4\x07h\x02\x02\xA4\x06\x03\x02" +
		"\x02\x02\xA5\xA6\x07g\x02\x02\xA6\xA7\x07n\x02\x02\xA7\xA8\x07u\x02\x02" +
		"\xA8\xA9\x07g\x02\x02\xA9\b\x03\x02\x02\x02\xAA\xAB\x07g\x02\x02\xAB\xAC" +
		"\x07n\x02\x02\xAC\xAD\x07k\x02\x02\xAD\xAE\x07h\x02\x02\xAE\n\x03\x02" +
		"\x02\x02\xAF\xB0\x07n\x02\x02\xB0\xB1\x07q\x02\x02\xB1\xB2\x07q\x02\x02" +
		"\xB2\xB3\x07r\x02\x02\xB3\f\x03\x02\x02\x02\xB4\xB5\x07k\x02\x02\xB5\xB6" +
		"\x07p\x02\x02\xB6\x0E\x03\x02\x02\x02\xB7\xB8\x07r\x02\x02\xB8\xB9\x07" +
		"c\x02\x02\xB9\xBA\x07u\x02\x02\xBA\xBB\x07u\x02\x02\xBB\x10\x03\x02\x02" +
		"\x02\xBC\xBD\x07e\x02\x02\xBD\xBE\x07q\x02\x02\xBE\xBF\x07p\x02\x02\xBF" +
		"\xC0\x07v\x02\x02\xC0\xC1\x07k\x02\x02\xC1\xC2\x07p\x02\x02\xC2\xC3\x07" +
		"w\x02\x02\xC3\xC4\x07g\x02\x02\xC4\x12\x03\x02\x02\x02\xC5\xC6\x07d\x02" +
		"\x02\xC6\xC7\x07t\x02\x02\xC7\xC8\x07g\x02\x02\xC8\xC9\x07c\x02\x02\xC9" +
		"\xCA\x07m\x02\x02\xCA\x14\x03\x02\x02\x02\xCB\xCC\x07t\x02\x02\xCC\xCD" +
		"\x07g\x02\x02\xCD\xCE\x07v\x02\x02\xCE\xCF\x07w\x02\x02\xCF\xD0\x07t\x02" +
		"\x02\xD0\xD1\x07p\x02\x02\xD1\x16\x03\x02\x02\x02\xD2\xD3\x07u\x02\x02" +
		"\xD3\xD4\x07g\x02\x02\xD4\xD5\x07n\x02\x02\xD5\xD6\x07g\x02\x02\xD6\xD7" +
		"\x07e\x02\x02\xD7\xD8\x07v\x02\x02\xD8\x18\x03\x02\x02\x02\xD9\xDA\x07" +
		"%\x02\x02\xDA\xDB\x07<\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDE\n\x02\x02" +
		"\x02\xDD\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\x1A\x03\x02\x02\x02\xE1\xE2\x06\x0E\x02" +
		"\x02\xE2\xEE\x05\x93J\x02\xE3\xE5\x07\x0F\x02\x02\xE4\xE3\x03\x02\x02" +
		"\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE9\x07\f\x02" +
		"\x02\xE7\xE9\x07\x0F\x02\x02\xE8\xE4\x03\x02\x02\x02\xE8\xE7\x03\x02\x02" +
		"\x02\xE9\xEB\x03\x02\x02\x02\xEA\xEC\x05\x93J\x02\xEB\xEA\x03\x02\x02" +
		"\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xE1\x03\x02\x02" +
		"\x02\xED\xE8\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\b\x0E\x02" +
		"\x02\xF0\x1C\x03\x02\x02\x02\xF1\xF2\x07c\x02\x02\xF2\xF3\x07p\x02\x02" +
		"\xF3\xF4\x07f\x02\x02\xF4\x1E\x03\x02\x02\x02\xF5\xF6\x07q\x02\x02\xF6" +
		"\xF7\x07t\x02\x02\xF7 \x03\x02\x02\x02\xF8\xF9\x07z\x02\x02\xF9\xFA\x07" +
		"q\x02\x02\xFA\xFB\x07t\x02\x02\xFB\"\x03\x02\x02\x02\xFC\xFD\x07p\x02" +
		"\x02\xFD\xFE\x07q\x02\x02\xFE\xFF\x07v\x02\x02\xFF$\x03\x02\x02\x02\u0100" +
		"\u0101\x07@\x02\x02\u0101\u0102\x07@\x02\x02\u0102&\x03\x02\x02\x02\u0103" +
		"\u0104\x07>\x02\x02\u0104\u0105\x07>\x02\x02\u0105(\x03\x02\x02\x02\u0106" +
		"\u0107\x07]\x02\x02\u0107\u0108\b\x15\x03\x02\u0108*\x03\x02\x02\x02\u0109" +
		"\u010A\x07_\x02\x02\u010A\u010B\b\x16\x04\x02\u010B,\x03\x02\x02\x02\u010C" +
		"\u010D\x07*\x02\x02\u010D\u010E\b\x17\x05\x02\u010E.\x03\x02\x02\x02\u010F" +
		"\u0110\x07+\x02\x02\u0110\u0111\b\x18\x06\x02\u01110\x03\x02\x02\x02\u0112" +
		"\u0113\x07}\x02\x02\u0113\u0114\b\x19\x07\x02\u01142\x03\x02\x02\x02\u0115" +
		"\u0116\x07\x7F\x02\x02\u0116\u0117\b\x1A\b\x02\u01174\x03\x02\x02\x02" +
		"\u0118\u0119\x07B\x02\x02\u01196\x03\x02\x02\x02\u011A\u011B\x07.\x02" +
		"\x02\u011B8\x03\x02\x02\x02\u011C\u011D\x07?\x02\x02\u011D:\x03\x02\x02" +
		"\x02\u011E\u011F\x07A\x02\x02\u011F<\x03\x02\x02\x02\u0120\u0121\x07<" +
		"\x02\x02\u0121>\x03\x02\x02\x02\u0122\u0123\x070\x02\x02\u0123@\x03\x02" +
		"\x02\x02\u0124\u0125\x07-\x02\x02\u0125B\x03\x02\x02\x02\u0126\u0127\x07" +
		"/\x02\x02\u0127D\x03\x02\x02\x02\u0128\u0129\x07#\x02\x02\u0129F\x03\x02" +
		"\x02\x02\u012A\u012B\x07,\x02\x02\u012BH\x03\x02\x02\x02\u012C\u012D\x07" +
		"1\x02\x02\u012DJ\x03\x02\x02\x02\u012E\u012F\x07\'\x02\x02\u012FL\x03" +
		"\x02\x02\x02\u0130\u0131\x07`\x02\x02\u0131N\x03\x02\x02\x02\u0132\u0133" +
		"\x07%\x02\x02\u0133P\x03\x02\x02\x02\u0134\u0135\x07>\x02\x02\u0135R\x03" +
		"\x02\x02\x02\u0136\u0137\x07@\x02\x02\u0137T\x03\x02\x02\x02\u0138\u0139" +
		"\x07>\x02\x02\u0139\u013A\x07?\x02\x02\u013AV\x03\x02\x02\x02\u013B\u013C" +
		"\x07@\x02\x02\u013C\u013D\x07?\x02\x02\u013DX\x03\x02\x02\x02\u013E\u013F" +
		"\x07?\x02\x02\u013F\u0140\x07?\x02\x02\u0140Z\x03\x02\x02\x02\u0141\u0142" +
		"\x07#\x02\x02\u0142\u0143\x07?\x02\x02\u0143\\\x03\x02\x02\x02\u0144\u0145" +
		"\x07(\x02\x02\u0145\u0146\x07(\x02\x02\u0146^\x03\x02\x02\x02\u0147\u0148" +
		"\x07~\x02\x02\u0148\u0149\x07~\x02\x02\u0149`\x03\x02\x02\x02\u014A\u014B" +
		"\x07,\x02\x02\u014B\u014C\x07?\x02\x02\u014Cb\x03\x02\x02\x02\u014D\u014E" +
		"\x071\x02\x02\u014E\u014F\x07?\x02\x02\u014Fd\x03\x02\x02\x02\u0150\u0151" +
		"\x07\'\x02\x02\u0151\u0152\x07?\x02\x02\u0152f\x03\x02\x02\x02\u0153\u0154" +
		"\x07-\x02\x02\u0154\u0155\x07?\x02\x02\u0155h\x03\x02\x02\x02\u0156\u0157" +
		"\x07/\x02\x02\u0157\u0158\x07?\x02\x02\u0158j\x03\x02\x02\x02\u0159\u015A" +
		"\x07>\x02\x02\u015A\u015B\x07>\x02\x02\u015B\u015C\x07?\x02\x02\u015C" +
		"l\x03\x02\x02\x02\u015D\u015E\x07@\x02\x02\u015E\u015F\x07@\x02\x02\u015F" +
		"\u0160\x07?\x02\x02\u0160n\x03\x02\x02\x02\u0161\u0162\x07c\x02\x02\u0162" +
		"\u0163\x07p\x02\x02\u0163\u0164\x07f\x02\x02\u0164\u0165\x03\x02\x02\x02" +
		"\u0165\u0166\x07?\x02\x02\u0166p\x03\x02\x02\x02\u0167\u0168\x07z\x02" +
		"\x02\u0168\u0169\x07q\x02\x02\u0169\u016A\x07t\x02\x02\u016A\u016B\x03" +
		"\x02\x02\x02\u016B\u016C\x07?\x02\x02\u016Cr\x03\x02\x02\x02\u016D\u016E" +
		"\x07q\x02\x02\u016E\u016F\x07t\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0171\x07?\x02\x02\u0171t\x03\x02\x02\x02\u0172\u0173\x07^\x02\x02\u0173" +
		"v\x03\x02\x02\x02\u0174\u0175\x07~\x02\x02\u0175x\x03\x02\x02\x02\u0176" +
		"\u0177\x07a\x02\x02\u0177z\x03\x02\x02\x02\u0178\u0179\x070\x02\x02\u0179" +
		"\u017A\x070\x02\x02\u017A\u017B\x070\x02\x02\u017B|\x03\x02\x02\x02\u017C" +
		"\u017D\x07p\x02\x02\u017D\u017E\x07w\x02\x02\u017E\u017F\x07n\x02\x02" +
		"\u017F\u0180\x07n\x02\x02\u0180~\x03\x02\x02\x02\u0181\u0182\x07v\x02" +
		"\x02\u0182\u0183\x07t\x02\x02\u0183\u0184\x07w\x02\x02\u0184\u018B\x07" +
		"g\x02\x02\u0185\u0186\x07h\x02\x02\u0186\u0187\x07c\x02\x02\u0187\u0188" +
		"\x07n\x02\x02\u0188\u0189\x07u\x02\x02\u0189\u018B\x07g\x02\x02\u018A" +
		"\u0181\x03\x02\x02\x02\u018A\u0185\x03\x02\x02\x02\u018B\x80\x03\x02\x02" +
		"\x02\u018C\u0193\x05\x9BN\x02\u018D\u018F\x05\x9BN\x02\u018E\u018D\x03" +
		"\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190" +
		"\u0191\x070\x02\x02\u0191\u0193\x05\x9BN\x02\u0192\u018C\x03\x02\x02\x02" +
		"\u0192\u018E\x03\x02\x02\x02\u0193\x82\x03\x02\x02\x02\u0194\u0198\x07" +
		")\x02\x02\u0195\u0197\x05\x9DO\x02\u0196\u0195\x03\x02\x02\x02\u0197\u019A" +
		"\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02" +
		"\u0199\u019B\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019C\x07" +
		")\x02\x02\u019C\x84\x03\x02\x02\x02\u019D\u019E\x07h\x02\x02\u019E\u019F" +
		"\x07)\x02\x02\u019F\u01A3\x03\x02\x02\x02\u01A0\u01A2\x05\x9DO\x02\u01A1" +
		"\u01A0\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02" +
		"\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5" +
		"\u01A3\x03\x02\x02\x02\u01A6\u01A7\x07}\x02\x02\u01A7\x86\x03\x02\x02" +
		"\x02\u01A8\u01AC\x07\x7F\x02\x02\u01A9\u01AB\x05\x9DO\x02\u01AA\u01A9" +
		"\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE\u01AC\x03" +
		"\x02\x02\x02\u01AF\u01B0\x07}\x02\x02\u01B0\x88\x03\x02\x02\x02\u01B1" +
		"\u01B5\x07\x7F\x02\x02\u01B2\u01B4\x05\x9DO\x02\u01B3\u01B2\x03\x02\x02" +
		"\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6" +
		"\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02" +
		"\u01B8\u01B9\x07)\x02\x02\u01B9\x8A\x03\x02\x02\x02\u01BA\u01BE\t\x03" +
		"\x02\x02\u01BB\u01BD\t\x04\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD\u01C0" +
		"\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
		"\u01BF\x8C\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C5\t\x05" +
		"\x02\x02\u01C2\u01C4\t\x04\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4\u01C7" +
		"\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
		"\u01C6\x8E\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01CD\x05" +
		"\x93J\x02\u01C9\u01CD\x05\x97L\x02\u01CA\u01CD\x05\x95K\x02\u01CB\u01CD" +
		"\x05\x99M\x02\u01CC\u01C8\x03\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02" +
		"\u01CC\u01CA\x03\x02\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01CF\bH\t\x02\u01CF\x90\x03\x02\x02\x02\u01D0\u01D1" +
		"\v\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\bI\n\x02\u01D3" +
		"\x92\x03\x02\x02\x02\u01D4\u01D6\t\x06\x02\x02\u01D5\u01D4\x03\x02\x02" +
		"\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8" +
		"\x03\x02\x02\x02\u01D8\x94\x03\x02\x02\x02\u01D9\u01DA\x071\x02\x02\u01DA" +
		"\u01DB\x07,\x02\x02\u01DB\u01DF\x03\x02\x02\x02\u01DC\u01DE\v\x02\x02" +
		"\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF\u01E0" +
		"\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E2\x03\x02\x02\x02" +
		"\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E3\x07,\x02\x02\u01E3\u01E4\x07" +
		"1\x02\x02\u01E4\x96\x03\x02\x02\x02\u01E5\u01E6\x071\x02\x02\u01E6\u01E7" +
		"\x071\x02\x02\u01E7\u01EB\x03\x02\x02\x02\u01E8\u01EA\n\x02\x02\x02\u01E9" +
		"\u01E8\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02" +
		"\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\x98\x03\x02\x02\x02\u01ED\u01EB" +
		"\x03\x02\x02\x02\u01EE\u01F0\x07^\x02\x02\u01EF\u01F1\x05\x93J\x02\u01F0" +
		"\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F7\x03\x02" +
		"\x02\x02\u01F2\u01F4\x07\x0F\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3" +
		"\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F8\x07\f\x02" +
		"\x02\u01F6\u01F8\x07\x0F\x02\x02\u01F7\u01F3\x03\x02\x02\x02\u01F7\u01F6" +
		"\x03\x02\x02\x02\u01F8\x9A\x03\x02\x02\x02\u01F9\u01FB\t\x07\x02\x02\u01FA" +
		"\u01FC\t\x07\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02" +
		"\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FF\x07z\x02\x02\u01FE\u0200" +
		"\t\b\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201" +
		"\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u020B\x03\x02" +
		"\x02\x02\u0203\u0205\x07a\x02\x02\u0204\u0206\t\b\x02\x02\u0205\u0204" +
		"\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02" +
		"\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u0203\x03" +
		"\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020C\u021F\x03\x02\x02\x02\u020D\u020B\x03\x02" +
		"\x02\x02\u020E\u0210\t\x07\x02\x02\u020F\u020E\x03\x02\x02\x02\u0210\u0211" +
		"\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02" +
		"\u0212\u021B\x03\x02\x02\x02\u0213\u0215\x07a\x02\x02\u0214\u0216\t\x07" +
		"\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
		"\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03\x02" +
		"\x02\x02\u0219\u0213\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B" +
		"\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021F\x03\x02" +
		"\x02\x02\u021D\u021B\x03\x02\x02\x02\u021E\u01F9\x03\x02\x02\x02\u021E" +
		"\u020F\x03\x02\x02\x02\u021F\x9C\x03\x02\x02\x02\u0220\u0224\n\t\x02\x02" +
		"\u0221\u0222\x07^\x02\x02\u0222\u0224\t\n\x02\x02\u0223\u0220\x03\x02" +
		"\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224\x9E\x03\x02\x02\x02!\x02\xDF" +
		"\xE4\xE8\xEB\xED\u018A\u018E\u0192\u0198\u01A3\u01AC\u01B5\u01BE\u01C5" +
		"\u01CC\u01D7\u01DF\u01EB\u01F0\u01F3\u01F7\u01FB\u0201\u0207\u020B\u0211" +
		"\u0217\u021B\u021E\u0223\v\x03\x0E\x02\x03\x15\x03\x03\x16\x04\x03\x17" +
		"\x05\x03\x18\x06\x03\x19\x07\x03\x1A\b\b\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

