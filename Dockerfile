FROM node:14.18-alpine3.14
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY "index.js" .

# Install OpenSSH and set the password for root to "Docker!". In this example, "apk add" is the install instruction for an Alpine Linux-based image.
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd 

# Copy the sshd_config file to the /etc/ssh/ directory
COPY sshd_config /etc/ssh/

# Copy and configure the ssh_setup file
# RUN mkdir -p /tmp
# COPY ssh_setup.sh /tmp
# RUN chmod +x /tmp/ssh_setup.sh \
#     && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null)

ENV PORT 8080
EXPOSE 8080 2222

CMD [ "node", "index.js"]
