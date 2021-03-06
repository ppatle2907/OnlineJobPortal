package com.app.services;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmailSenderService {
	
	//create java mail sender object to send a mail
	@Autowired
	private JavaMailSender mailSender;

	//send mail to single user
	public void sendMailToUser(String toEmail,String body,String subject)
	{
		//for simple mail
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("pushkarajyeolekar99@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject(subject);
		
		//send email
		mailSender.send(message);
		System.out.println("Mail send...");
	}
	
	//send mail to multiple users
	public void sendMailToMultiUsers(String[] toEmail,String body,String subject)
	{
		//for simple mail
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("pushkarajyeolekar99@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject(subject);
		
		//send email
		mailSender.send(message);
		System.out.println("Mail send...");
	}

	public void sendEmailWithAttachment(String toEmail,String body,String subject,String attachment) throws MessagingException
	{
		//for mail with attachment
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
		
		messageHelper.setFrom("pushkarajyeolekar99@gmail.com");
		messageHelper.setTo(toEmail);
		messageHelper.setText(body);
		messageHelper.setSubject(subject);
		
		//to add attachment
		FileSystemResource fileSystem = new FileSystemResource(new File(attachment));
		messageHelper.addAttachment(fileSystem.getFilename(),fileSystem);
		
		//send email
		mailSender.send(message);
		System.out.println("mail with attchement is send ........");
		
	}
	
	

}
