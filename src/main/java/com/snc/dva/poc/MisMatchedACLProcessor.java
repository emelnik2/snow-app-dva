package main.java.com.snc.dva.poc;

import com.glide.processors.Processor;
import com.glide.script.GlideRecord;

public class MisMatchedACLProcessor extends Processor {

	public MisMatchedACLProcessor(){

	}

	public static void doSomeGROperation(){
		GlideRecord gr = new GlideRecord("incident");
		gr.query();
	}

	@Override
	protected void process() {
		MisMatchedACLProcessor.doSomeGROperation();
	}
}
