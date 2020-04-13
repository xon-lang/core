// Generated from XonParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly Class = 3;
	public static readonly Enum = 4;
	public static readonly Scheme = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly Loop = 8;
	public static readonly In = 9;
	public static readonly Continue = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly As = 13;
	public static readonly Var = 14;
	public static readonly Select = 15;
	public static readonly Preprocessor = 16;
	public static readonly LineBreak = 17;
	public static readonly BitAnd = 18;
	public static readonly BitOr = 19;
	public static readonly BitXor = 20;
	public static readonly RightShiftArithmetic = 21;
	public static readonly LeftShiftArithmetic = 22;
	public static readonly RightShiftLogical = 23;
	public static readonly OpenBracket = 24;
	public static readonly CloseBracket = 25;
	public static readonly OpenParen = 26;
	public static readonly CloseParen = 27;
	public static readonly OpenBrace = 28;
	public static readonly CloseBrace = 29;
	public static readonly Comma = 30;
	public static readonly Assign = 31;
	public static readonly QuestionMark = 32;
	public static readonly Colon = 33;
	public static readonly TwoColon = 34;
	public static readonly Dot = 35;
	public static readonly Plus = 36;
	public static readonly Minus = 37;
	public static readonly BitNot = 38;
	public static readonly Not = 39;
	public static readonly Multiply = 40;
	public static readonly Divide = 41;
	public static readonly Modulus = 42;
	public static readonly Pow = 43;
	public static readonly Sharp = 44;
	public static readonly LessThan = 45;
	public static readonly MoreThan = 46;
	public static readonly LessThanEquals = 47;
	public static readonly MoreThanEquals = 48;
	public static readonly Equals = 49;
	public static readonly NotEquals = 50;
	public static readonly And = 51;
	public static readonly Or = 52;
	public static readonly MultiplyAssign = 53;
	public static readonly DivideAssign = 54;
	public static readonly ModulusAssign = 55;
	public static readonly PlusAssign = 56;
	public static readonly MinusAssign = 57;
	public static readonly LeftShiftArithmeticAssign = 58;
	public static readonly RightShiftArithmeticAssign = 59;
	public static readonly RightShiftLogicalAssign = 60;
	public static readonly BitAndAssign = 61;
	public static readonly BitXorAssign = 62;
	public static readonly BitOrAssign = 63;
	public static readonly LambdaStart = 64;
	public static readonly Pipe = 65;
	public static readonly Underscore = 66;
	public static readonly Declaration = 67;
	public static readonly Constant = 68;
	public static readonly Spread = 69;
	public static readonly NullLiteral = 70;
	public static readonly BooleanLiteral = 71;
	public static readonly DecimalLiteral = 72;
	public static readonly FloatLiteral = 73;
	public static readonly StringLiteral = 74;
	public static readonly StringFormatStart = 75;
	public static readonly StringFormatMiddle = 76;
	public static readonly StringFormatEnd = 77;
	public static readonly ID = 78;
	public static readonly Skip = 79;
	public static readonly UnexpectedCharacter = 80;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_definitionMember = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_literal = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "definitionMember", 
		"statement", "argument", "body", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'class'", "'enum'", "'scheme'", "'if'", 
		"'else'", "'loop'", "'in'", "'continue'", "'break'", "'return'", "'as'", 
		"'var'", "'select'", undefined, undefined, "'and'", "'or'", "'xor'", "'>>'", 
		"'<<'", "'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", 
		"'?'", "':'", "'::'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", 
		"'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
		"'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", 
		"'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", "':='", "'::='", "'...'", 
		"'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Class", "Enum", "Scheme", "If", "Else", 
		"Loop", "In", "Continue", "Break", "Return", "As", "Var", "Select", "Preprocessor", 
		"LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
		"Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", 
		"Equals", "NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", 
		"ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "Declaration", 
		"Constant", "Spread", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
		"FloatLiteral", "StringLiteral", "StringFormatStart", "StringFormatMiddle", 
		"StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
				{
				this.state = 24;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 22;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 23;
					this.definition();
					}
					break;
				}
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.importPath();
			this.state = 30;
			this.match(XonParser.Colon);
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 31;
				this.match(XonParser.Multiply);
				this.state = 32;
				this.match(XonParser.As);
				this.state = 33;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 34;
				this.importMember();
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 35;
					this.match(XonParser.Comma);
					this.state = 36;
					this.importMember();
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 44;
				this.match(XonParser.Dot);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			_la = this._input.LA(1);
			if (!(_la === XonParser.StringLiteral || _la === XonParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot) {
				{
				{
				this.state = 51;
				this.match(XonParser.Dot);
				this.state = 52;
				_la = this._input.LA(1);
				if (!(_la === XonParser.StringLiteral || _la === XonParser.ID)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importMember(): ImportMemberContext {
		let _localctx: ImportMemberContext = new ImportMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_importMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			_localctx._name = this.match(XonParser.ID);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 59;
				this.match(XonParser.As);
				this.state = 60;
				_localctx._alias = this.match(XonParser.ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			_localctx._name = this.match(XonParser.ID);
			this.state = 64;
			this.match(XonParser.Colon);
			this.state = 65;
			this.match(XonParser.LineBreak);
			this.state = 66;
			this.match(XonParser.INDENT);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.LineBreak || _la === XonParser.ID) {
				{
				{
				this.state = 67;
				this.definitionMember();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionMember(): DefinitionMemberContext {
		let _localctx: DefinitionMemberContext = new DefinitionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_definitionMember);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 80;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.Colon:
					{
					this.state = 76;
					this.match(XonParser.Colon);
					this.state = 77;
					(_localctx as PropertyMemberContext)._type = this.match(XonParser.ID);
					}
					break;
				case XonParser.Assign:
					{
					this.state = 78;
					this.match(XonParser.Assign);
					this.state = 79;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.match(XonParser.ID);
				this.state = 83;
				this.match(XonParser.OpenParen);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 84;
					this.argument();
					this.state = 89;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 85;
						this.match(XonParser.Comma);
						this.state = 86;
						this.argument();
						}
						}
						this.state = 91;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 94;
				this.match(XonParser.CloseParen);
				this.state = 95;
				this.body();
				}
				break;

			case 3:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.match(XonParser.LineBreak);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new ConstantStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.match(XonParser.ID);
				this.state = 101;
				this.match(XonParser.Constant);
				this.state = 102;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
				this.match(XonParser.ID);
				this.state = 104;
				this.match(XonParser.Declaration);
				this.state = 105;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.match(XonParser.ID);
				this.state = 107;
				this.match(XonParser.Assign);
				this.state = 108;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 109;
				this.match(XonParser.ID);
				this.state = 110;
				this.match(XonParser.OpenParen);
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 111;
					this.argument();
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 112;
						this.match(XonParser.Comma);
						this.state = 113;
						this.argument();
						}
						}
						this.state = 118;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 121;
				this.match(XonParser.CloseParen);
				this.state = 122;
				this.body();
				}
				break;

			case 6:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 123;
				this.match(XonParser.Continue);
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 124;
				this.match(XonParser.Break);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 125;
				this.match(XonParser.Return);
				this.state = 127;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 126;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 129;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 130;
				this.match(XonParser.LineBreak);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			_localctx._name = this.match(XonParser.ID);
			this.state = 134;
			this.match(XonParser.Colon);
			this.state = 135;
			_localctx._type = this.match(XonParser.ID);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 136;
				this.match(XonParser.Assign);
				this.state = 137;
				_localctx._value = this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(XonParser.Colon);
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 142;
				this.match(XonParser.LineBreak);
				this.state = 143;
				this.match(XonParser.INDENT);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 144;
					this.statement();
					}
					}
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0));
				this.state = 149;
				this.match(XonParser.DEDENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 154;
				this.match(XonParser.If);
				this.state = 155;
				this.expression(0);
				this.state = 156;
				this.body();
				this.state = 163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 157;
					this.match(XonParser.Else);
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 158;
						this.match(XonParser.If);
						this.state = 159;
						this.expression(0);
						}
					}

					this.state = 162;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LoopExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				this.match(XonParser.Loop);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
					{
					this.state = 178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						this.state = 166;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 171;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
						case 1:
							{
							this.state = 167;
							this.match(XonParser.Comma);
							this.state = 169;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 168;
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 175;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 173;
							this.match(XonParser.Comma);
							this.state = 174;
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 177;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 180;
					this.expression(0);
					}
				}

				this.state = 183;
				this.body();
				}
				break;

			case 3:
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 184;
				this.match(XonParser.Select);
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
					{
					this.state = 185;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.As) {
						{
						this.state = 186;
						this.match(XonParser.As);
						this.state = 187;
						this.match(XonParser.ID);
						}
					}

					}
				}

				this.state = 192;
				this.match(XonParser.Colon);
				this.state = 193;
				this.match(XonParser.LineBreak);
				this.state = 194;
				this.match(XonParser.INDENT);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 195;
					(_localctx as SelectExpressionContext)._expression = this.expression(0);
					(_localctx as SelectExpressionContext)._cases.push((_localctx as SelectExpressionContext)._expression);
					this.state = 196;
					this.body();
					this.state = 197;
					this.match(XonParser.LineBreak);
					}
					}
					this.state = 201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0));
				this.state = 203;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 205;
				this.match(XonParser.Spread);
				this.state = 206;
				this.expression(25);
				}
				break;

			case 5:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 207;
				this.match(XonParser.Plus);
				this.state = 208;
				this.expression(23);
				}
				break;

			case 6:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 209;
				this.match(XonParser.Minus);
				this.state = 210;
				this.expression(22);
				}
				break;

			case 7:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 211;
				this.match(XonParser.BitNot);
				this.state = 212;
				this.expression(21);
				}
				break;

			case 8:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 213;
				this.match(XonParser.Not);
				this.state = 214;
				this.expression(20);
				}
				break;

			case 9:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 215;
				this.match(XonParser.ID);
				}
				break;

			case 10:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 216;
				this.literal();
				}
				break;

			case 11:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 217;
				this.match(XonParser.StringFormatStart);
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 218;
						this.expression(0);
						this.state = 219;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 226;
				this.expression(0);
				this.state = 227;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 12:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 229;
				this.match(XonParser.OpenBracket);
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
					{
					this.state = 230;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 231;
						this.match(XonParser.Comma);
						this.state = 232;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 237;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 240;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 13:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 241;
				this.match(XonParser.OpenBracket);
				this.state = 242;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 243;
				this.match(XonParser.Colon);
				this.state = 244;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 245;
					this.match(XonParser.Colon);
					this.state = 246;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 249;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 14:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 251;
				this.match(XonParser.OpenBrace);
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 252;
					this.match(XonParser.ID);
					this.state = 253;
					this.match(XonParser.Colon);
					this.state = 254;
					this.expression(0);
					this.state = 261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 255;
						this.match(XonParser.Comma);
						this.state = 256;
						this.match(XonParser.ID);
						this.state = 257;
						this.match(XonParser.Colon);
						this.state = 258;
						this.expression(0);
						}
						}
						this.state = 263;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 266;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 15:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 267;
				this.match(XonParser.OpenParen);
				this.state = 268;
				this.expression(0);
				this.state = 269;
				this.match(XonParser.CloseParen);
				}
				break;

			case 16:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 271;
				this.match(XonParser.LambdaStart);
				this.state = 281;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 272;
					this.match(XonParser.ID);
					this.state = 277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 273;
						this.match(XonParser.Comma);
						this.state = 274;
						this.match(XonParser.ID);
						}
						}
						this.state = 279;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 280;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 283;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 365;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 363;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 287;
						this.match(XonParser.Pow);
						this.state = 288;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 290;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (XonParser.Multiply - 40)) | (1 << (XonParser.Divide - 40)) | (1 << (XonParser.Modulus - 40)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 291;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 293;
						(_localctx as AddSubExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Plus || _la === XonParser.Minus)) {
							(_localctx as AddSubExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 294;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 295;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 296;
						(_localctx as BitShiftExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic) | (1 << XonParser.RightShiftLogical))) !== 0))) {
							(_localctx as BitShiftExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 297;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 299;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (XonParser.LessThan - 45)) | (1 << (XonParser.MoreThan - 45)) | (1 << (XonParser.LessThanEquals - 45)) | (1 << (XonParser.MoreThanEquals - 45)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 300;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 302;
						(_localctx as EqualityExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 303;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 304;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 305;
						this.match(XonParser.BitAnd);
						this.state = 306;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 307;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 308;
						this.match(XonParser.BitXor);
						this.state = 309;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 310;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 311;
						this.match(XonParser.BitOr);
						this.state = 312;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 314;
						this.match(XonParser.And);
						this.state = 315;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 316;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 317;
						this.match(XonParser.Or);
						this.state = 318;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 319;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 320;
						this.match(XonParser.Pipe);
						this.state = 323;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
						case 1:
							{
							this.state = 321;
							this.match(XonParser.ID);
							this.state = 322;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 325;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 326;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 327;
						this.match(XonParser.OpenParen);
						this.state = 336;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
							{
							this.state = 328;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 333;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 329;
								this.match(XonParser.Comma);
								this.state = 330;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 335;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 338;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 339;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 340;
						this.match(XonParser.OpenBracket);
						this.state = 341;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 342;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 344;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 345;
						this.match(XonParser.OpenBracket);
						this.state = 346;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 347;
						this.match(XonParser.Colon);
						this.state = 349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (XonParser.Spread - 69)) | (1 << (XonParser.NullLiteral - 69)) | (1 << (XonParser.BooleanLiteral - 69)) | (1 << (XonParser.DecimalLiteral - 69)) | (1 << (XonParser.FloatLiteral - 69)) | (1 << (XonParser.StringLiteral - 69)) | (1 << (XonParser.StringFormatStart - 69)) | (1 << (XonParser.ID - 69)))) !== 0)) {
							{
							this.state = 348;
							(_localctx as SliceExpressionContext)._end = this.expression(0);
							}
						}

						this.state = 353;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 351;
							this.match(XonParser.Colon);
							this.state = 352;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 355;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 357;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 359;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 358;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 361;
						this.match(XonParser.Dot);
						this.state = 362;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_literal);
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 369;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 370;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 371;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 372;
				this.match(XonParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 24);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 10);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 29);

		case 13:
			return this.precpred(this._ctx, 28);

		case 14:
			return this.precpred(this._ctx, 27);

		case 15:
			return this.precpred(this._ctx, 26);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u017A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x07\x02\x1B\n\x02\f\x02\x0E\x02\x1E\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03" +
		"\x05\x03-\n\x03\x03\x04\x07\x040\n\x04\f\x04\x0E\x043\v\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x05\x03\x05\x03\x05" +
		"\x05\x05@\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06G\n\x06" +
		"\f\x06\x0E\x06J\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07S\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"Z\n\x07\f\x07\x0E\x07]\v\x07\x05\x07_\n\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07d\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bu\n\b\f\b\x0E\bx\v\b\x05\bz\n\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x82\n\b\x03\b\x03\b\x05\b\x86" +
		"\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8D\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x06\n\x94\n\n\r\n\x0E\n\x95\x03\n\x03\n\x05\n\x9A\n\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xA3\n\v\x03\v\x05\v\xA6\n\v\x03" +
		"\v\x03\v\x03\v\x03\v\x05\v\xAC\n\v\x05\v\xAE\n\v\x03\v\x03\v\x05\v\xB2" +
		"\n\v\x03\v\x05\v\xB5\n\v\x03\v\x05\v\xB8\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\xBF\n\v\x05\v\xC1\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x06\v\xCA\n\v\r\v\x0E\v\xCB\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\xE0\n\v\f\v\x0E\v\xE3\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x07\v\xEC\n\v\f\v\x0E\v\xEF\v\v\x05\v\xF1\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x05\v\xFA\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\u0106\n\v\f\v\x0E\v\u0109\v\v\x05\v\u010B\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0116\n" +
		"\v\f\v\x0E\v\u0119\v\v\x03\v\x05\v\u011C\n\v\x03\v\x05\v\u011F\n\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\u0146\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u014E\n\v" +
		"\f\v\x0E\v\u0151\v\v\x05\v\u0153\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0160\n\v\x03\v\x03\v\x05\v\u0164" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u016A\n\v\x03\v\x03\v\x07\v\u016E\n" +
		"\v\f\v\x0E\v\u0171\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0178\n\f\x03" +
		"\f\x02\x02\x03\x14\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x02\b\x04\x02LLPP\x03\x02*,\x03\x02&" +
		"\'\x03\x02\x17\x19\x03\x02/2\x03\x0234\x02\u01C5\x02\x1C\x03\x02\x02\x02" +
		"\x04\x1F\x03\x02\x02\x02\x061\x03\x02\x02\x02\b<\x03\x02\x02\x02\nA\x03" +
		"\x02\x02\x02\fc\x03\x02\x02\x02\x0E\x85\x03\x02\x02\x02\x10\x87\x03\x02" +
		"\x02\x02\x12\x8E\x03\x02\x02\x02\x14\u011E\x03\x02\x02\x02\x16\u0177\x03" +
		"\x02\x02\x02\x18\x1B\x05\x0E\b\x02\x19\x1B\x05\n\x06\x02\x1A\x18\x03\x02" +
		"\x02\x02\x1A\x19\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02" +
		"\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x03\x03\x02\x02\x02\x1E\x1C\x03\x02" +
		"\x02\x02\x1F \x05\x06\x04\x02 ,\x07#\x02\x02!\"\x07*\x02\x02\"#\x07\x0F" +
		"\x02\x02#-\x07P\x02\x02$)\x05\b\x05\x02%&\x07 \x02\x02&(\x05\b\x05\x02" +
		"\'%\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02" +
		"\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02,!\x03\x02\x02\x02,$\x03\x02\x02" +
		"\x02-\x05\x03\x02\x02\x02.0\x07%\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02" +
		"\x021/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0249\t\x02\x02\x0256\x07%\x02\x0268\t\x02\x02\x0275\x03\x02\x02\x02" +
		"8;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\x07\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02<?\x07P\x02\x02=>\x07\x0F\x02\x02>@\x07P\x02\x02" +
		"?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\t\x03\x02\x02\x02AB\x07P\x02\x02" +
		"BC\x07#\x02\x02CD\x07\x13\x02\x02DH\x07\x03\x02\x02EG\x05\f\x07\x02FE" +
		"\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x07\x04\x02\x02L\v\x03\x02\x02" +
		"\x02MR\x07P\x02\x02NO\x07#\x02\x02OS\x07P\x02\x02PQ\x07!\x02\x02QS\x05" +
		"\x14\v\x02RN\x03\x02\x02\x02RP\x03\x02\x02\x02Sd\x03\x02\x02\x02TU\x07" +
		"P\x02\x02U^\x07\x1C\x02\x02V[\x05\x10\t\x02WX\x07 \x02\x02XZ\x05\x10\t" +
		"\x02YW\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02" +
		"\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02^V\x03\x02\x02\x02^_\x03" +
		"\x02\x02\x02_`\x03\x02\x02\x02`a\x07\x1D\x02\x02ad\x05\x12\n\x02bd\x07" +
		"\x13\x02\x02cM\x03\x02\x02\x02cT\x03\x02\x02\x02cb\x03\x02\x02\x02d\r" +
		"\x03\x02\x02\x02e\x86\x07\x12\x02\x02fg\x07P\x02\x02gh\x07F\x02\x02h\x86" +
		"\x05\x14\v\x02ij\x07P\x02\x02jk\x07E\x02\x02k\x86\x05\x14\v\x02lm\x07" +
		"P\x02\x02mn\x07!\x02\x02n\x86\x05\x14\v\x02op\x07P\x02\x02py\x07\x1C\x02" +
		"\x02qv\x05\x10\t\x02rs\x07 \x02\x02su\x05\x10\t\x02tr\x03\x02\x02\x02" +
		"ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wz\x03\x02\x02\x02" +
		"xv\x03\x02\x02\x02yq\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{|\x07\x1D\x02\x02|\x86\x05\x12\n\x02}\x86\x07\f\x02\x02~\x86\x07\r\x02" +
		"\x02\x7F\x81\x07\x0E\x02\x02\x80\x82\x05\x14\v\x02\x81\x80\x03\x02\x02" +
		"\x02\x81\x82\x03\x02\x02\x02\x82\x86\x03\x02\x02\x02\x83\x86\x05\x14\v" +
		"\x02\x84\x86\x07\x13\x02\x02\x85e\x03\x02\x02\x02\x85f\x03\x02\x02\x02" +
		"\x85i\x03\x02\x02\x02\x85l\x03\x02\x02\x02\x85o\x03\x02\x02\x02\x85}\x03" +
		"\x02\x02\x02\x85~\x03\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x83\x03" +
		"\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86\x0F\x03\x02\x02\x02\x87\x88\x07" +
		"P\x02\x02\x88\x89\x07#\x02\x02\x89\x8C\x07P\x02\x02\x8A\x8B\x07!\x02\x02" +
		"\x8B\x8D\x05\x14\v\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02" +
		"\x8D\x11\x03\x02\x02\x02\x8E\x99\x07#\x02\x02\x8F\x9A\x05\x0E\b\x02\x90" +
		"\x91\x07\x13\x02\x02\x91\x93\x07\x03\x02\x02\x92\x94\x05\x0E\b\x02\x93" +
		"\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95" +
		"\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x07\x04\x02\x02\x98" +
		"\x9A\x03\x02\x02\x02\x99\x8F\x03\x02\x02\x02\x99\x90\x03\x02\x02\x02\x9A" +
		"\x13\x03\x02\x02\x02\x9B\x9C\b\v\x01\x02\x9C\x9D\x07\b\x02\x02\x9D\x9E" +
		"\x05\x14\v\x02\x9E\xA5\x05\x12\n\x02\x9F\xA2\x07\t\x02\x02\xA0\xA1\x07" +
		"\b\x02\x02\xA1\xA3\x05\x14\v\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x05\x12\n\x02\xA5\x9F\x03\x02" +
		"\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\u011F\x03\x02\x02\x02\xA7\xB7\x07" +
		"\n\x02\x02\xA8\xAD\x07P\x02\x02\xA9\xAB\x07 \x02\x02\xAA\xAC\x07P\x02" +
		"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02" +
		"\x02\xAD\xA9\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02" +
		"\x02\xAF\xB0\x07 \x02\x02\xB0\xB2\x07P\x02\x02\xB1\xAF\x03\x02\x02\x02" +
		"\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x07\v\x02\x02" +
		"\xB4\xA8\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02" +
		"\xB6\xB8\x05\x14\v\x02\xB7\xB4\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02" +
		"\xB8\xB9\x03\x02\x02\x02\xB9\u011F\x05\x12\n\x02\xBA\xC0\x07\x11\x02\x02" +
		"\xBB\xBE\x05\x14\v\x02\xBC\xBD\x07\x0F\x02\x02\xBD\xBF\x07P\x02\x02\xBE" +
		"\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0" +
		"\xBB\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2" +
		"\xC3\x07#\x02\x02\xC3\xC4\x07\x13\x02\x02\xC4\xC9\x07\x03\x02\x02\xC5" +
		"\xC6\x05\x14\v\x02\xC6\xC7\x05\x12\n\x02\xC7\xC8\x07\x13\x02\x02\xC8\xCA" +
		"\x03\x02\x02\x02\xC9\xC5\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xC9" +
		"\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE" +
		"\x07\x04\x02\x02\xCE\u011F\x03\x02\x02\x02\xCF\xD0\x07G\x02\x02\xD0\u011F" +
		"\x05\x14\v\x1B\xD1\xD2\x07&\x02\x02\xD2\u011F\x05\x14\v\x19\xD3\xD4\x07" +
		"\'\x02\x02\xD4\u011F\x05\x14\v\x18\xD5\xD6\x07(\x02\x02\xD6\u011F\x05" +
		"\x14\v\x17\xD7\xD8\x07)\x02\x02\xD8\u011F\x05\x14\v\x16\xD9\u011F\x07" +
		"P\x02\x02\xDA\u011F\x05\x16\f\x02\xDB\xE1\x07M\x02\x02\xDC\xDD\x05\x14" +
		"\v\x02\xDD\xDE\x07N\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF\xDC\x03\x02\x02" +
		"\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
		"\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE5\x05\x14\v" +
		"\x02\xE5\xE6\x07O\x02\x02\xE6\u011F\x03\x02\x02\x02\xE7\xF0\x07\x1A\x02" +
		"\x02\xE8\xED\x05\x14\v\x02\xE9\xEA\x07 \x02\x02\xEA\xEC\x05\x14\v\x02" +
		"\xEB\xE9\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02" +
		"\xED\xEE\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02" +
		"\xF0\xE8\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
		"\xF2\u011F\x07\x1B\x02\x02\xF3\xF4\x07\x1A\x02\x02\xF4\xF5\x05\x14\v\x02" +
		"\xF5\xF6\x07#\x02\x02\xF6\xF9\x05\x14\v\x02\xF7\xF8\x07#\x02\x02\xF8\xFA" +
		"\x05\x14\v\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB" +
		"\x03\x02\x02\x02\xFB\xFC\x07\x1B\x02\x02\xFC\u011F\x03\x02\x02\x02\xFD" +
		"\u010A\x07\x1E\x02\x02\xFE\xFF\x07P\x02\x02\xFF\u0100\x07#\x02\x02\u0100" +
		"\u0107\x05\x14\v\x02\u0101\u0102\x07 \x02\x02\u0102\u0103\x07P\x02\x02" +
		"\u0103\u0104\x07#\x02\x02\u0104\u0106\x05\x14\v\x02\u0105\u0101\x03\x02" +
		"\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107" +
		"\u0108\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02" +
		"\x02\x02\u010A\xFE\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C" +
		"\x03\x02\x02\x02\u010C\u011F\x07\x1F\x02\x02\u010D\u010E\x07\x1C\x02\x02" +
		"\u010E\u010F\x05\x14\v\x02\u010F\u0110\x07\x1D\x02\x02\u0110\u011F\x03" +
		"\x02\x02\x02\u0111\u011B\x07B\x02\x02\u0112\u0117\x07P\x02\x02\u0113\u0114" +
		"\x07 \x02\x02\u0114\u0116\x07P\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116" +
		"\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03\x02" +
		"\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A" +
		"\u011C\x07#\x02\x02\u011B\u0112\x03\x02\x02\x02\u011B\u011C\x03\x02\x02" +
		"\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011F\x05\x14\v\x03\u011E\x9B\x03" +
		"\x02\x02\x02\u011E\xA7\x03\x02\x02\x02\u011E\xBA\x03\x02\x02\x02\u011E" +
		"\xCF\x03\x02\x02\x02\u011E\xD1\x03\x02\x02\x02\u011E\xD3\x03\x02\x02\x02" +
		"\u011E\xD5\x03\x02\x02\x02\u011E\xD7\x03\x02\x02\x02\u011E\xD9\x03\x02" +
		"\x02\x02\u011E\xDA\x03\x02\x02\x02\u011E\xDB\x03\x02\x02\x02\u011E\xE7" +
		"\x03\x02\x02\x02\u011E\xF3\x03\x02\x02\x02\u011E\xFD\x03\x02\x02\x02\u011E" +
		"\u010D\x03\x02\x02\x02\u011E\u0111\x03\x02\x02\x02\u011F\u016F\x03\x02" +
		"\x02\x02\u0120\u0121\f\x1A\x02\x02\u0121\u0122\x07-\x02\x02\u0122\u016E" +
		"\x05\x14\v\x1B\u0123\u0124\f\x15\x02\x02\u0124\u0125\t\x03\x02\x02\u0125" +
		"\u016E\x05\x14\v\x16\u0126\u0127\f\x14\x02\x02\u0127\u0128\t\x04\x02\x02" +
		"\u0128\u016E\x05\x14\v\x15\u0129\u012A\f\x13\x02\x02\u012A\u012B\t\x05" +
		"\x02\x02\u012B\u016E\x05\x14\v\x14\u012C\u012D\f\x12\x02\x02\u012D\u012E" +
		"\t\x06\x02\x02\u012E\u016E\x05\x14\v\x13\u012F\u0130\f\x11\x02\x02\u0130" +
		"\u0131\t\x07\x02\x02\u0131\u016E\x05\x14\v\x12\u0132\u0133\f\x10\x02\x02" +
		"\u0133\u0134\x07\x14\x02\x02\u0134\u016E\x05\x14\v\x11\u0135\u0136\f\x0F" +
		"\x02\x02\u0136\u0137\x07\x16\x02\x02\u0137\u016E\x05\x14\v\x10\u0138\u0139" +
		"\f\x0E\x02\x02\u0139\u013A\x07\x15\x02\x02\u013A\u016E\x05\x14\v\x0F\u013B" +
		"\u013C\f\r\x02\x02\u013C\u013D\x075\x02\x02\u013D\u016E\x05\x14\v\x0E" +
		"\u013E\u013F\f\f\x02\x02\u013F\u0140\x076\x02\x02\u0140\u016E\x05\x14" +
		"\v\r\u0141\u0142\f\x04\x02\x02\u0142\u0145\x07C\x02\x02\u0143\u0144\x07" +
		"P\x02\x02\u0144\u0146\x07#\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146" +
		"\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u016E\x05\x14\v\x05" +
		"\u0148\u0149\f\x1F\x02\x02\u0149\u0152\x07\x1C\x02\x02\u014A\u014F\x05" +
		"\x14\v\x02\u014B\u014C\x07 \x02\x02\u014C\u014E\x05\x14\v\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02" +
		"\u014F\u0150\x03\x02\x02\x02\u0150\u0153\x03\x02\x02\x02\u0151\u014F\x03" +
		"\x02\x02\x02\u0152\u014A\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u016E\x07\x1D\x02\x02\u0155\u0156\f\x1E\x02" +
		"\x02\u0156\u0157\x07\x1A\x02\x02\u0157\u0158\x05\x14\v\x02\u0158\u0159" +
		"\x07\x1B\x02\x02\u0159\u016E\x03\x02\x02\x02\u015A\u015B\f\x1D\x02\x02" +
		"\u015B\u015C\x07\x1A\x02\x02\u015C\u015D\x05\x14\v\x02\u015D\u015F\x07" +
		"#\x02\x02\u015E\u0160\x05\x14\v\x02\u015F\u015E\x03\x02\x02\x02\u015F" +
		"\u0160\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u0162\x07#\x02" +
		"\x02\u0162\u0164\x05\x14\v\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x07\x1B\x02\x02" +
		"\u0166\u016E\x03\x02\x02\x02\u0167\u0169\f\x1C\x02\x02\u0168\u016A\x07" +
		"\"\x02\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
		"\u016B\x03\x02\x02\x02\u016B\u016C\x07%\x02\x02\u016C\u016E\x07P\x02\x02" +
		"\u016D\u0120\x03\x02\x02\x02\u016D\u0123\x03\x02\x02\x02\u016D\u0126\x03" +
		"\x02\x02\x02\u016D\u0129\x03\x02\x02\x02\u016D\u012C\x03\x02\x02\x02\u016D" +
		"\u012F\x03\x02\x02\x02\u016D\u0132\x03\x02\x02\x02\u016D\u0135\x03\x02" +
		"\x02\x02\u016D\u0138\x03\x02\x02\x02\u016D\u013B\x03\x02\x02\x02\u016D" +
		"\u013E\x03\x02\x02\x02\u016D\u0141\x03\x02\x02\x02\u016D\u0148\x03\x02" +
		"\x02\x02\u016D\u0155\x03\x02\x02\x02\u016D\u015A\x03\x02\x02\x02\u016D" +
		"\u0167\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02" +
		"\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\x15\x03\x02\x02\x02\u0171\u016F" +
		"\x03\x02\x02\x02\u0172\u0178\x07H\x02\x02\u0173\u0178\x07I\x02\x02\u0174" +
		"\u0178\x07J\x02\x02\u0175\u0178\x07K\x02\x02\u0176\u0178\x07L\x02\x02" +
		"\u0177\u0172\x03\x02\x02\x02\u0177\u0173\x03\x02\x02\x02\u0177\u0174\x03" +
		"\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0176\x03\x02\x02\x02\u0178" +
		"\x17\x03\x02\x02\x021\x1A\x1C),19?HR[^cvy\x81\x85\x8C\x95\x99\xA2\xA5" +
		"\xAB\xAD\xB1\xB4\xB7\xBE\xC0\xCB\xE1\xED\xF0\xF9\u0107\u010A\u0117\u011B" +
		"\u011E\u0145\u014F\u0152\u015F\u0163\u0169\u016D\u016F\u0177";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class ImportsContext extends ParserRuleContext {
	public _alias: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public importMember(): ImportMemberContext[];
	public importMember(i: number): ImportMemberContext;
	public importMember(i?: number): ImportMemberContext | ImportMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportMemberContext);
		} else {
			return this.getRuleContext(i, ImportMemberContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_imports; }
}


export class ImportPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringLiteral);
		} else {
			return this.getToken(XonParser.StringLiteral, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Dot);
		} else {
			return this.getToken(XonParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importPath; }
}


export class ImportMemberContext extends ParserRuleContext {
	public _name: Token;
	public _alias: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public _name: Token;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public definitionMember(): DefinitionMemberContext[];
	public definitionMember(i: number): DefinitionMemberContext;
	public definitionMember(i?: number): DefinitionMemberContext | DefinitionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionMemberContext);
		} else {
			return this.getRuleContext(i, DefinitionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class DefinitionMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionMember; }
	public copyFrom(ctx: DefinitionMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends DefinitionMemberContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DefinitionMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends DefinitionMemberContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: DefinitionMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakMemberContext extends DefinitionMemberContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: DefinitionMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConstantStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Constant(): TerminalNode { return this.getToken(XonParser.Constant, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DeclarationStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Declaration(): TerminalNode { return this.getToken(XonParser.Declaration, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode { return this.getToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueStatementContext extends StatementContext {
	public Continue(): TerminalNode { return this.getToken(XonParser.Continue, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class BodyContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IfExpressionContext extends ExpressionContext {
	public If(): TerminalNode[];
	public If(i: number): TerminalNode;
	public If(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.If);
		} else {
			return this.getToken(XonParser.If, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopExpressionContext extends ExpressionContext {
	public _value: Token;
	public _key: Token;
	public _index: Token;
	public Loop(): TerminalNode { return this.getToken(XonParser.Loop, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(XonParser.In, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SelectExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _expression: ExpressionContext;
	public _cases: ExpressionContext[] = [];
	public Select(): TerminalNode { return this.getToken(XonParser.Select, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends ExpressionContext {
	public _object: ExpressionContext;
	public _expression: ExpressionContext;
	public _args: ExpressionContext[] = [];
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _index: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SliceExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _startPos: ExpressionContext;
	public _end: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(XonParser.QuestionMark, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SpreadExpressionContext extends ExpressionContext {
	public Spread(): TerminalNode { return this.getToken(XonParser.Spread, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _base: ExpressionContext;
	public _exponent: ExpressionContext;
	public Pow(): TerminalNode { return this.getToken(XonParser.Pow, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryPlusExpressionContext extends ExpressionContext {
	public Plus(): TerminalNode { return this.getToken(XonParser.Plus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(XonParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(XonParser.BitNot, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
	public Not(): TerminalNode { return this.getToken(XonParser.Not, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(XonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitShiftExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftLogical, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitAnd(): TerminalNode { return this.getToken(XonParser.BitAnd, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitXorExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitXor(): TerminalNode { return this.getToken(XonParser.BitXor, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitOr(): TerminalNode { return this.getToken(XonParser.BitOr, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public And(): TerminalNode { return this.getToken(XonParser.And, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Or(): TerminalNode { return this.getToken(XonParser.Or, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringFormatExpressionContext extends ExpressionContext {
	public StringFormatStart(): TerminalNode { return this.getToken(XonParser.StringFormatStart, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public StringFormatEnd(): TerminalNode { return this.getToken(XonParser.StringFormatEnd, 0); }
	public StringFormatMiddle(): TerminalNode[];
	public StringFormatMiddle(i: number): TerminalNode;
	public StringFormatMiddle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringFormatMiddle);
		} else {
			return this.getToken(XonParser.StringFormatMiddle, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public _expression: ExpressionContext;
	public _items: ExpressionContext[] = [];
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _startPos: ExpressionContext;
	public _end: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PipeExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Pipe(): TerminalNode { return this.getToken(XonParser.Pipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public LambdaStart(): TerminalNode { return this.getToken(XonParser.LambdaStart, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	public NullLiteral(): TerminalNode { return this.getToken(XonParser.NullLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends LiteralContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(XonParser.DecimalLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FloatLiteral(): TerminalNode { return this.getToken(XonParser.FloatLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


